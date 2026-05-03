'use client'

import { useEffect, useRef, useState } from 'react'

const vertexShaderSource = `
attribute vec2 a_position;
varying vec2 v_uv;

void main() {
  v_uv = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`

const fragmentShaderSource = `
precision highp float;

uniform vec2 u_resolution;
uniform float u_time;
uniform float u_motion;
varying vec2 v_uv;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 345.45));
  p += dot(p, p + 34.345);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

mat2 rotate2d(float a) {
  float s = sin(a);
  float c = cos(a);
  return mat2(c, -s, s, c);
}

void main() {
  vec2 uv = v_uv;
  vec2 p = uv * 2.0 - 1.0;
  float t = u_time;

  vec2 shardUv = rotate2d(-0.58) * (uv * vec2(3.2, 2.0));
  float shard = noise(shardUv * 5.0 + vec2(t * 0.18, -t * 0.12));
  shard = pow(shard, 2.2);

  float waveA = sin((uv.x * 2.4 - uv.y * 3.9 + t * 0.42) * 6.28318);
  float waveB = sin((uv.x * 8.4 + uv.y * 4.7 - t * 1.15) + noise(uv * 6.0) * 2.0);
  float foil = smoothstep(0.18, 0.98, waveA * 0.34 + waveB * 0.18 + shard * 0.9);

  float sweepLine = uv.x * 0.78 + uv.y * 0.54;
  float sweepCenter = mod(t * 0.34, 1.55) - 0.24;
  float sweep = smoothstep(0.085, 0.0, abs(sweepLine - sweepCenter));

  float topGlow = smoothstep(0.82, 0.1, length((uv - vec2(0.2, 0.14)) * vec2(1.4, 2.0)));
  float bottomDepth = smoothstep(-0.1, 0.92, uv.y);
  float edgeShade = 1.0 - smoothstep(0.58, 1.22, length(p * vec2(0.72, 1.12)));

  vec3 deep = vec3(0.015, 0.145, 0.135);
  vec3 teal = vec3(0.020, 0.690, 0.610);
  vec3 ink = vec3(0.018, 0.055, 0.070);
  vec3 base = mix(ink, deep, 0.68 + 0.24 * noise(uv * 3.2));
  base = mix(base, teal, 0.20 + topGlow * 0.30);
  base *= 0.78 + edgeShade * 0.42;
  base = mix(base, vec3(0.020, 0.280, 0.255), bottomDepth * 0.26);

  vec3 mint = vec3(0.470, 1.000, 0.780);
  vec3 amber = vec3(1.000, 0.740, 0.310);
  vec3 pearl = vec3(0.760, 1.000, 0.920);
  vec3 ocean = vec3(0.040, 0.780, 0.710);
  float palette = 0.5 + 0.5 * sin((uv.x * 1.4 - uv.y * 0.8 + shard * 0.65 + t * 0.08) * 6.28318);
  vec3 holo = mix(ocean, mint, smoothstep(0.10, 0.68, palette));
  holo = mix(holo, amber, smoothstep(0.62, 1.0, palette) * 0.62);
  holo = mix(holo, pearl, sweep * 0.32);

  float micro = noise(uv * u_resolution.xy * 0.042 + t * 0.35);
  float prismatic = foil * (0.10 + 0.18 * u_motion) + sweep * (0.34 + 0.22 * u_motion);
  vec3 color = mix(base, holo, prismatic);
  color += vec3(1.0, 0.93, 0.76) * sweep * 0.22;
  color += vec3(micro) * 0.022;
  color *= 0.80 + edgeShade * 0.24;

  gl_FragColor = vec4(color, 1.0);
}
`

function compileShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type)
  if (!shader) return null

  gl.shaderSource(shader, source)
  gl.compileShader(shader)

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader)
    return null
  }

  return shader
}

export default function HolographicHeroCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [hasWebgl, setHasWebgl] = useState(true)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext('webgl', {
      alpha: false,
      antialias: false,
      powerPreference: 'high-performance',
    })

    if (!gl) {
      setHasWebgl(false)
      return
    }

    const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vertexShaderSource)
    const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource)
    const program = gl.createProgram()

    if (!vertexShader || !fragmentShader || !program) {
      setHasWebgl(false)
      return
    }

    gl.attachShader(program, vertexShader)
    gl.attachShader(program, fragmentShader)
    gl.linkProgram(program)

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      setHasWebgl(false)
      return
    }

    setHasWebgl(true)

    const positionLocation = gl.getAttribLocation(program, 'a_position')
    const resolutionLocation = gl.getUniformLocation(program, 'u_resolution')
    const timeLocation = gl.getUniformLocation(program, 'u_time')
    const motionLocation = gl.getUniformLocation(program, 'u_motion')
    const positionBuffer = gl.createBuffer()

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW,
    )

    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frameId = 0
    let isVisible = true
    let disposed = false
    const start = performance.now()

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const width = Math.max(1, Math.floor(rect.width * dpr))
      const height = Math.max(1, Math.floor(rect.height * dpr))

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width
        canvas.height = height
        gl.viewport(0, 0, width, height)
      }
    }

    const render = (now: number) => {
      if (disposed) return

      resizeCanvas()
      const reduceMotion = reducedMotionQuery.matches
      const seconds = reduceMotion ? 2.2 : (now - start) / 1000
      const motion = reduceMotion ? 0.18 : 0.72 + Math.sin(seconds * 1.2) * 0.28

      gl.useProgram(program)
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
      gl.enableVertexAttribArray(positionLocation)
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height)
      gl.uniform1f(timeLocation, seconds)
      gl.uniform1f(motionLocation, motion)
      gl.drawArrays(gl.TRIANGLES, 0, 6)

      if (!reduceMotion && isVisible) {
        frameId = requestAnimationFrame(render)
      }
    }

    const scheduleRender = () => {
      cancelAnimationFrame(frameId)
      if (reducedMotionQuery.matches || !isVisible) {
        render(performance.now())
        return
      }
      frameId = requestAnimationFrame(render)
    }

    const resizeObserver = new ResizeObserver(scheduleRender)
    resizeObserver.observe(canvas)

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting
        scheduleRender()
      },
      { threshold: 0.08 },
    )
    intersectionObserver.observe(canvas)

    reducedMotionQuery.addEventListener('change', scheduleRender)
    scheduleRender()

    return () => {
      disposed = true
      cancelAnimationFrame(frameId)
      resizeObserver.disconnect()
      intersectionObserver.disconnect()
      reducedMotionQuery.removeEventListener('change', scheduleRender)
      gl.deleteBuffer(positionBuffer)
      gl.deleteProgram(program)
      gl.deleteShader(vertexShader)
      gl.deleteShader(fragmentShader)
    }
  }, [])

  return (
    <div className="hero-card-stage" data-hero-shader-card aria-hidden="true">
      <div className="hero-card-tilt">
        <div className="hero-card-rotor">
          <div className="castar-card-face castar-card-front">
            <div className="castar-card-fallback" />
            <canvas
              ref={canvasRef}
              className={`castar-card-canvas${hasWebgl ? '' : ' castar-card-canvas-hidden'}`}
              aria-hidden="true"
            />
            <div className="castar-card-grain" />
            <div className="castar-card-content">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-[0.64rem] font-extrabold uppercase tracking-[0.28em] text-white/80">
                    Castar
                  </div>
                  <div className="mt-1 text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-teal-50/55">
                    Creator World
                  </div>
                </div>
                <div className="castar-card-mark">
                  <img src="/logo3.svg" width="22" height="22" className="h-5 w-5 brightness-0 invert" alt="" />
                </div>
              </div>

              <div className="castar-card-chip">
                <span />
                <span />
                <span />
                <span />
              </div>

              <div className="mt-auto">
                <div className="font-mono text-[0.72rem] font-semibold tracking-[0.22em] text-white/68">
                  4821  8840  2450
                </div>
                <div className="mt-4 flex items-end justify-between gap-4">
                  <div>
                    <div className="text-[0.58rem] font-bold uppercase tracking-[0.18em] text-teal-50/55">
                      Active fan
                    </div>
                    <div className="mt-1 text-sm font-extrabold tracking-tight text-white">
                      Level 7 member
                    </div>
                  </div>
                  <div className="rounded-full border border-white/18 bg-white/12 px-3 py-1 text-[0.62rem] font-bold text-white/82 shadow-sm">
                    2,450 XP
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="castar-card-face castar-card-back">
            <div className="castar-card-back-shine" />
            <div className="h-10 w-full bg-slate-950/72" />
            <div className="flex flex-1 flex-col justify-between p-5">
              <div className="flex items-center justify-between text-[0.56rem] font-bold uppercase tracking-[0.2em] text-teal-50/64">
                <span>Fan pass</span>
                <span>Card linked</span>
              </div>
              <div className="rounded-lg border border-white/12 bg-white/10 px-4 py-3 text-right font-mono text-[0.7rem] tracking-[0.22em] text-white/70">
                884
              </div>
              <div className="flex items-end justify-between">
                <span className="text-[0.58rem] font-bold uppercase tracking-[0.18em] text-teal-50/54">
                  Castar
                </span>
                <span className="text-[0.58rem] font-semibold text-white/50">World ID 07</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import { useEffect, useRef, useState } from "react"

type ImagePropsType = {
    src ?: string
    placeholderSrc ?: string
    className ?: string
    id ?: string
    alt ?: string
    width ?: string | number
    height ?: string | number
    /**
     * Specifies the percentage of an element to be visible in the viewport (0 - 1 <=> 0% - 100%)
     */
    threshold ?: number
    loading ?: 'eager' | 'lazy'
    effect ?: 'blur' | 'opacity'
}

const Image = ({
    src,
    placeholderSrc,
    className,
    id,
    alt,
    width,
    height,
    threshold = 0.1,
    loading,
    effect
} : ImagePropsType) => {

    const [isInView, setIsInView] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)
    const imageRef = useRef<HTMLImageElement | null>(null)
  
    useEffect(() => {

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true)
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold }
        )
  
        if (imageRef.current) observer.observe(imageRef.current)
  
        return () => {
            if (imageRef.current) observer.unobserve(imageRef.current)
        }

    }, [threshold])

    return (
        <>
            {!isLoaded && (
                <img
                    ref={imageRef}
                    src={placeholderSrc}
                    className={className}
                    alt={alt}
                    loading={loading}
                    width={width}
                    height={height}
                    style={{
                        opacity: placeholderSrc ? 1 : 0
                    }}
                    id={id}
                />
            )}
            {isInView && (
                <img
                    className={className}
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    loading={loading}
                    style={{
                        opacity: isLoaded ? 1 : 0,
                        transition: effect === 'blur' ? 'filter 0.5s ease-in-out' : effect === 'opacity' ? 'opacity 0.5s ease-in-out' : 'none',
                        filter: isLoaded ? 'none' : effect === 'blur' ? 'blur(10px)' : 'none',
                    }}
                    onLoad={() => setIsLoaded(true)}
                />
            )}
        </>
    )
}

export default Image
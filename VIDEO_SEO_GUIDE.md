# Ottimizzazione Video per SEO - Studio Dentistico Fanelli

## 1. OTTIMIZZAZIONI TECNICHE IMPLEMENTATE

### Video Attributes:
- ✅ `poster` - Thumbnail per SEO e UX
- ✅ `preload="metadata"` - Carica solo metadati inizialmente
- ✅ `aria-label` e `title` per accessibilità
- ✅ `<source>` tag per compatibilità
- ✅ Fallback text con download link

### Schema Markup:
- ✅ VideoObject schema per Google Rich Results
- ✅ Publisher info per autorità
- ✅ Thumbnail URL per SERP
- ✅ Duration e upload date

## 2. OTTIMIZZAZIONI NECESSARIE

### A. Compressione Video:
```bash
# Usa FFmpeg per ottimizzare:
ffmpeg -i input.mp4 -c:v libx264 -crf 28 -preset slow -c:a aac -b:a 128k output.mp4

# Per web (più leggero):
ffmpeg -i input.mp4 -vcodec h264 -acodec mp2 -vf scale=-1:720 -r 30 output.mp4
```

### B. Formati multipli per compatibilità:
```tsx
<video>
    <source src="/videos/progettazione.webm" type="video/webm" />
    <source src="/videos/progettazione.mp4" type="video/mp4" />
    <source src="/videos/progettazione.ogv" type="video/ogg" />
</video>
```

### C. Lazy Loading per Performance:
```tsx
// Componente con Intersection Observer
const [isVisible, setIsVisible] = useState(false);
const [shouldLoad, setShouldLoad] = useState(false);

useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                setShouldLoad(true);
            }
        },
        { threshold: 0.1 }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
}, []);
```

## 3. CREA QUESTI FILE:

### A. Immagine Poster:
- `public/images/video-poster-progettazione.jpg`
- Dimensioni: 1080x1920px (9:16)
- Peso: <100KB
- Alt text descrittivo

### B. Sitemap Video:
```xml
<url>
  <loc>https://marcoantoniorussodev.github.io/StudioDentisticoFanelli/</loc>
  <video:video>
    <video:content_loc>https://marcoantoniorussodev.github.io/StudioDentisticoFanelli/videos/progettazione-digitale.mp4</video:content_loc>
    <video:thumbnail_loc>https://marcoantoniorussodev.github.io/StudioDentisticoFanelli/images/video-poster-progettazione.jpg</video:thumbnail_loc>
    <video:title>Progettazione Digitale Studio Dentistico</video:title>
    <video:description>Software CAD avanzato per progettazione protesi dentali</video:description>
    <video:duration>30</video:duration>
  </video:video>
</url>
```

## 4. METRICHE DA MONITORARE:

### Core Web Vitals:
- LCP (Largest Contentful Paint)
- CLS (Cumulative Layout Shift)  
- FID (First Input Delay)

### Video Metrics:
- Load time
- Play rate
- Engagement time

## 5. BEST PRACTICES AGGIUNTIVE:

- 🎯 **Transcription** per accessibilità
- 🎯 **Captions** in italiano
- 🎯 **Mobile-first** optimization
- 🎯 **CDN** per delivery globale
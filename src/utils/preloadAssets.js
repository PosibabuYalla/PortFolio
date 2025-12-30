import { useGLTF } from '@react-three/drei'

// Preload the brain model
useGLTF.preload('/models/brain.glb')

export const preloadImages = () => {
  const imageUrls = [
    '/images/posiprofwb.png',
    '/images/logos/CLICKTOCHATLOGO.gif',
    '/images/logos/PAPIKONDALULOGO.png',
    '/images/logos/SLSITLOGO.png',
    '/images/logos/VISWABHARATHILOGO.png',
    '/images/logos/SABARIYATECHLOGO.png',
    '/images/logos/HOLITHEMESLOGO.png',
    '/images/logos/INNOBYTELOGO.png',
    '/images/logos/10000CODERSLOGO.png'
  ]

  imageUrls.forEach(url => {
    const img = new Image()
    img.src = url
  })
}
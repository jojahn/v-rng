import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"

const imageCache = new Map()
const modelCache = new Map()
const gltfLoader = new GLTFLoader()

export function preloadImage(src) {
    if (imageCache.has(src)) {
        return Promise.resolve(imageCache.get(src))
    }

    return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = () => {
            imageCache.set(src, img)
            resolve(img)
        }
        img.onerror = reject
        img.src = src
    })
}

export function preloadModel(modelPath) {
    if (modelCache.has(modelPath)) {
        const cached = modelCache.get(modelPath)
        return Promise.resolve({
            scene: cached.scene.clone(),
            scenes: cached.scenes,
            animations: cached.animations,
            asset: cached.asset,
            parser: cached.parser
        })
    }

    return new Promise((resolve, reject) => {
        gltfLoader.load(
            modelPath,
            (gltf) => {
                modelCache.set(modelPath, gltf)
                resolve({
                    scene: gltf.scene.clone(),
                    scenes: gltf.scenes,
                    animations: gltf.animations,
                    asset: gltf.asset,
                    parser: gltf.parser
                })
            },
            undefined,
            reject
        )
    })
}

export function preloadImages(srcList) {
    return Promise.all(srcList.map((src) => preloadImage(src)))
}

export function preloadModels(pathList) {
    return Promise.all(pathList.map((path) => preloadModel(path)))
}

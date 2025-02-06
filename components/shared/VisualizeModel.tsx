import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const VisualizeModel = ({ modelPath }: { modelPath: string }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // get container size
        const container = containerRef.current;
        const width = container.clientWidth;
        const height = container.clientHeight;

        // set up scene, camera, and renderer
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xeeeeee); // light gray background

        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.z = 3; // default position

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setClearColor(0xeeeeee, 1);
        container.appendChild(renderer.domElement);

        // lighting
        const light = new THREE.DirectionalLight(0xffffff, 2);
        light.position.set(5, 5, 5);
        scene.add(light);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        // orbit controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.1;
        controls.screenSpacePanning = false;
        controls.minDistance = 1;
        controls.maxDistance = 100;
        controls.update();

        // load the GLTF model with DRACO
        const loader = new GLTFLoader();
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
        loader.setDRACOLoader(dracoLoader);

        loader.load(
            modelPath,
            (gltf) => {
                console.log('Model successfully loaded:', gltf);
                const model = gltf.scene;

                // compute bounding box and center the model
                const box = new THREE.Box3().setFromObject(model);
                const size = box.getSize(new THREE.Vector3());
                const center = box.getCenter(new THREE.Vector3());

                console.log('Model Bounding Box:', size);
                console.log('Model Center:', center);

                model.position.sub(center);

                // scale model based on screen size
                const scaleFactor = width < 600 ? 1.0 : 1.75; // Smaller scale for mobile
                model.scale.set(scaleFactor, scaleFactor, scaleFactor);

                scene.add(model);

                // adjust camera position dynamically
                const distance = Math.max(size.x, size.y + 0.25, size.z);
                camera.position.set(center.x, center.y, distance * 1.5);
                camera.lookAt(center);

                controls.target.set(center.x, center.y - 0.1, center.z);
                controls.update();
            },
            undefined,
            (error) => console.error('Error loading model:', error)
        );

        // animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        // handle window resizing dynamically
        const handleResize = () => {
            const newWidth = container.clientWidth;
            const newHeight = container.clientHeight;

            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();

            renderer.setSize(newWidth, newHeight);
        };

        window.addEventListener('resize', handleResize);

        // cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            container.removeChild(renderer.domElement);
        };
    }, [modelPath]);

    return (
        <div
            ref={containerRef}
            className="w-full h-[60vh] md:w-[690px] md:h-[630px] mx-auto max-w-full"
        ></div>
    );
};

export default VisualizeModel;

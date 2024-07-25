"use client"

import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const PageServices = () => {
    return (
        <>
            <TransitionPage/>
            <CircleImage/>
            <AvatarServices/>
            <div className="p-6 grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2 md:px-20">
                <div className="max-w-[450px] mt-20 md:mt-0">
                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
                        Mis{" "}
                        <span className="font-bold text-secondary">
                            servicios.
                        </span>
                    </h1>
                    <p className="mb-3 text-xl text-gray-300">
                        Ofrezco servicios de desarrollo web, asi como
                        de diseño grafico, edición de video, creación de
                        sitios web, aplicaciones atractivas y funcionales.
                        Utilizando tecnologías como HTML, CSS, React,
                        Wordpress, Adobe Photoshop, Adobe Illustrator,
                        Adobe After Effects, Davinci Resolve, diseñando
                        tanto la marca como las plataformas de mis clientes
                        mejorando su presencia en linea. 
                    </p>
                    <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">Contacta conmigo</button>
                    
                </div>

            {/*SLIDER*/}
                <div>
                    <SliderServices/>
                </div>
            </div>
        </>
    );
}

export default PageServices;
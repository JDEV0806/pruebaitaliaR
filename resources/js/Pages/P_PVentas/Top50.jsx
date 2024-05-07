import { Head } from "@inertiajs/react";
import { useState, useEffect } from "react";
export default function Index({ auth }) {
    return (
        <div className="py-1">
            <div className="mx-auto sm:px-6 lg:px-8">
                <div className="bg-transparent overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-0 text-gray-900">
                        <iframe
                            title="Desarrollo de Contenido Login"
                            height="1000px"
                            width="100%"
                            src="https://app.powerbi.com/view?r=eyJrIjoiNjk2NmNjNjktOTY5ZC00Y2Y0LWI1ZjAtZDgwOWZiNzg0MWI2IiwidCI6IjRjNjlkODFmLWU4YzEtNGFiMy04OTcxLTg5M2RhNjdkMjE4OSIsImMiOjR9"
                            frameborder="0"
                            allowFullScreen="true"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

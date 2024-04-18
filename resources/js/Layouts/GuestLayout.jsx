import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 bg-gray-100">
            <div>
                {/* <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-600" />
                </Link> */}
            </div>

            <div className="m-auto grid rounded-xl bg-white p-10 shadow-md lg:w-2/5 md:w-4/5 sm:w-4/5">
                <div className="grid-cols-12">
                    <img className="w-5-6 h-20 m-auto"
                        src="img/logocompletonegro.png"
                        alt="LINEA ITALIA"
                    />
                </div>
                <div className="flex grid-cols-12 place-content-center">
                    <h1 className="text-2xl font-bold text-gray-500">Acceso</h1>
                </div>

                {children}

            </div>
        </div>
    );
}

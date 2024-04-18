import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useState, useEffect } from "react";
export default function Index({ auth }) {


    return (
        <AuthenticatedLayout user={auth.user}>
              <iframe title="Desarrollo de Contenido Login" height="1000px" width="100%" src="https://ranking.lineaitalia.net/ranking.php" frameborder="0" allowFullScreen="true"></iframe>
        </AuthenticatedLayout>
    );
}

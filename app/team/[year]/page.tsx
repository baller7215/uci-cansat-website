import CoverPage from "@/components/shared/CoverPage";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/shared/Footer";
import React from 'react';

const TeamYearPage = () => {
    return (
        <>
            <main>
                {/* cover page */}
                <CoverPage page="teamYear" title="The Team" subtitle="" background="./assets/images/starfield.png" />
            </main>
        </>
    );
};

export default TeamYearPage;
import "@/app/(pages)/dienstleistungen/style.scss";

import Link from "next/link";

import { RxOpenInNewWindow } from "react-icons/rx";

export const metadata = {
    title: "Dienstleistungen",
};

export default function Page() {
    return (
        <main className="dienstleistungen-page">
            <section className="intro-section">
                <div className="section-container">
                    <div className="flex-grid">
                        <h1 className="title">Dienstleistungen</h1>
                        <p className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut vel tenetur molestias dolorum earum rerum odit reiciendis maiores ex unde voluptatibus, suscipit laboriosam rem nobis fugit! Hic similique dicta ducimus.</p>
                    </div>
                </div>
            </section>

            <section className="service-section-odd">
                <div className="section-container">
                    <div className="flex-grid">
                        <div className="title-box">
                            <h2 className="title">DATENAUFBEREITUNG</h2>
                        </div>
                        <div className="sub-flex-grid">
                            <div className="title-box">
                                <h3 className="title">Titel</h3>
                            </div>
                            <div className="text-box">
                                <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id quo neque reprehenderit natus voluptatem pariatur, iusto magnam ex aliquid nemo cupiditate illo, saepe labore sit. Earum cumque ea perferendis mollitia libero rerum deleniti aspernatur excepturi quod accusantium magni, esse reiciendis ad, qui labore voluptas sunt, provident sint optio illo eveniet culpa laudantium enim. Rem ducimus corrupti totam, minus quaerat, tempore est ipsam laborum, commodi quam assumenda deserunt cupiditate similique labore repudiandae fugiat exercitationem amet nesciunt eligendi dolore.</p>
                                <Link href={"/kontakt"} className="link">
                                    Kontakt aufnehmen
                                </Link>
                            </div>
                            <div className="image-box">
                                <div className="image-holder">
                                    <iframe src="/documents/dienstleistungen/model.html" referrerPolicy="no-referrer" loading="lazy" title="3D Model" className="frame"></iframe>
                                    <Link href={"/documents/dienstleistungen/model.html"} target="_blank" className="model-link">
                                        Model öffnen
                                        <RxOpenInNewWindow className="icon" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="service-section-even">
                <div className="section-container">
                    <div className="flex-grid">
                        <div className="title-box">
                            <h2 className="title">BESTANDAUFNAHME</h2>
                        </div>
                        <div className="sub-flex-grid">
                            <div className="title-box">
                                <h3 className="title">Titel</h3>
                            </div>
                            <div className="text-box">
                                <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id quo neque reprehenderit natus voluptatem pariatur, iusto magnam ex aliquid nemo cupiditate illo, saepe labore sit. Earum cumque ea perferendis mollitia libero rerum deleniti aspernatur excepturi quod accusantium magni, esse reiciendis ad, qui labore voluptas sunt, provident sint optio illo eveniet culpa laudantium enim. Rem ducimus corrupti totam, minus quaerat, tempore est ipsam laborum, commodi quam assumenda deserunt cupiditate similique labore repudiandae fugiat exercitationem amet nesciunt eligendi dolore.</p>
                                <Link href={"/kontakt"} className="link">
                                    Kontakt aufnehmen
                                </Link>
                            </div>
                            <div className="image-box">
                                <div className="image-holder"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="service-section-odd">
                <div className="section-container">
                    <div className="flex-grid">
                        <div className="title-box">
                            <h2 className="title">MASSENERMITTLUNG / AUFNAHME</h2>
                        </div>
                        <div className="sub-flex-grid">
                            <div className="title-box">
                                <h3 className="title">Titel</h3>
                            </div>
                            <div className="text-box">
                                <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id quo neque reprehenderit natus voluptatem pariatur, iusto magnam ex aliquid nemo cupiditate illo, saepe labore sit. Earum cumque ea perferendis mollitia libero rerum deleniti aspernatur excepturi quod accusantium magni, esse reiciendis ad, qui labore voluptas sunt, provident sint optio illo eveniet culpa laudantium enim. Rem ducimus corrupti totam, minus quaerat, tempore est ipsam laborum, commodi quam assumenda deserunt cupiditate similique labore repudiandae fugiat exercitationem amet nesciunt eligendi dolore.</p>
                                <Link href={"/kontakt"} className="link">
                                    Kontakt aufnehmen
                                </Link>
                            </div>
                            <div className="image-box">
                                <div className="image-holder"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="service-section-even">
                <div className="section-container">
                    <div className="flex-grid">
                        <div className="title-box">
                            <h2 className="title">SCHULUNGEN</h2>
                        </div>
                        <div className="sub-flex-grid">
                            <div className="title-box">
                                <h3 className="title">Titel</h3>
                            </div>
                            <div className="text-box">
                                <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id quo neque reprehenderit natus voluptatem pariatur, iusto magnam ex aliquid nemo cupiditate illo, saepe labore sit. Earum cumque ea perferendis mollitia libero rerum deleniti aspernatur excepturi quod accusantium magni, esse reiciendis ad, qui labore voluptas sunt, provident sint optio illo eveniet culpa laudantium enim. Rem ducimus corrupti totam, minus quaerat, tempore est ipsam laborum, commodi quam assumenda deserunt cupiditate similique labore repudiandae fugiat exercitationem amet nesciunt eligendi dolore.</p>
                                <Link href={"/kontakt"} className="link">
                                    Kontakt aufnehmen
                                </Link>
                            </div>
                            <div className="image-box">
                                <div className="image-holder"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}



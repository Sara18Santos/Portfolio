
export default function Contact() {
    return (
        <div>
            <section className="pb-24 pt-40">
                <div className="container max-w-3xl">
                    <h1 className="title no-underline">Contact Me</h1>
                    <p className="mt-3 font-light text-muted-foreground">
                        Feel free to reach out to me via email at{" "}
                        <a
                            href="mailto:sataide.santos@gmail.com"
                            className="text-foreground underline transition-colors hover:text-primary"
                        >
                            sataide.santos@gmail.com
                        </a>
                    </p>
                </div>
            </section>
        </div>
    )
}
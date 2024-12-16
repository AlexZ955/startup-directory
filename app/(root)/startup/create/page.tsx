import { auth } from "@/auth"
import StartupForm from "@/components/StartupForm"

const CreateStartup = async () => {
    const session = await auth()

    return (
        <>
            <section className="pink_container !min-h-[230px]">
                <h1 className="heading">Submit Your Startup</h1>
            </section>
            <StartupForm />
        </>
    )
}

export default CreateStartup
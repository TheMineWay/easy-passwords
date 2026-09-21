import { Container } from "./components/layout/container";

export const App: React.FC = () => {
    return <div className="w-screen h-lvh flex flex-col">
        <header className="w-full p-4 bg-primary">
            <Container className="flex">
                <h1 className="font-bold text-xl"><span className="text-white">Easy</span>Passwords</h1>
            </Container>
        </header>
        <main className="flex-1">
            <Container className="h-full w-full">

            </Container>
        </main>
    </div>;
}

export function MainLayout({ children }: any) {
    return (<>
        <header>
        <div className="flex justify-start items-center h-10 bg-cyan-600">Header</div>
        </header>
        <div className="min-h-screen p-2">
            {children}
        </div>
        <footer>
        <div className="flex justify-start items-center h-10 bg-cyan-600">Footer</div>
        </footer>
    </>)
}

export default MainLayout;
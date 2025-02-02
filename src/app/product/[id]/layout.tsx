
export default function ProductLayout({
    children,
}: {
    children: React.ReactNode;
}){
    return <div>
        {children}
        <div>
            <h1>This is product layouts</h1>
        </div>
    </div>
}
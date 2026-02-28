export const SoftGradient = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            <div
                className="hidden md:block absolute inset-0"
                style={{
                    background: `
                radial-gradient(ellipse at 50% 8%, 
                #27BEF520 20%, 
                #27BEF515 45%, 
                #FFFFFF00 60%) 
                `,
                }}
            />
            <div
                className="block md:hidden absolute inset-0"
                style={{
                    background: `
                radial-gradient(circle at 50% 20%, 
                #27BEF520 15%, 
                #27BEF515 30%, 
                #FFFFFF00 45%) 
                `,
                }}
            />
        </div>
    )
}
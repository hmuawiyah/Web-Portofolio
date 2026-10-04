export const SoftGradient = () => {
    return (
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#11111112_1px,transparent_1px),linear-gradient(to_bottom,#11111112_1px,transparent_1px)] bg-size-[48px_48px]" />
        </div>
    )
}

type StatCardProps = {
    label: string,
    value: string | number,
    helperText?: string
}

export default function StatCard({
    label,
    value,
    helperText
}: StatCardProps) {
    return (
        <article className="
        rounded-2xl border border-[#bfc7f8] 
        bg-linear-to-br from-[#1e2470] via-[#3d3d8f] to-[#5b4b9e] 
        shadow-sm p-7 
        transition duration-300 ease-out hover:-translate-y-1 hover:scale-[1.07] hover:shadow-lg"
        >
            <p className="text-sm font-medium text-gray-300">
                {label}
            </p>

            <p className="mt-2 text-4xl font-bold text-shadow-white">
                {value}
            </p>

            {helperText && (
                <p className="mt-2 text-sm text-gray-400">
                    {helperText}
                </p>
            )}
        </article>
    )
}

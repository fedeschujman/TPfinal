


const people = [
    {
    name: 'Federico Schujman',
    role: 'Co-Founder / CEO',
    imageUrl:
        'data:image/jpeg;base64,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',
    },

    {name: 'Lucas Nieva',
    role: 'Co-Founder / CEO',
    imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTl25JcRqr0up0biB1eQWTfdZP3mhHwa9ZZQ&usqp=CAU',
    },

    {
name: 'Facundo Fernandez',
    role: 'Accionist',
    imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjY-QtYWxWDN518YpBjl76p9lqazFgKocwPQ&usqp=CAU',
    },
    
    {
        name: 'Lautaro Carreras',
    role: 'Web development',
    imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47l1ZdDvhaNX6mOZckfQAhzeAlN3U4w7h2A&usqp=CAU',
    }


    
]

export default function Equipo() {
    return (
    <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nuestro equipo</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Les presentamos al gran equipo que está al mando de esta compañía, haciendo todo su esfuerzo para que ustedes estén satisfechos.
            </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
            <li key={person.name}>
                <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                </div>
                </div>
            </li>
            ))}
        </ul>
        </div>
    </div>
    )
}

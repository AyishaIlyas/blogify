import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Visit Github
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout my other projects 
            </p>
            <Button className='rounded-tl-xl rounded-bl-none bg-gradient-to-r from-green-900 via-red-900 to-black'>
                <a href="https://github.com/AyishaIlyas?tab=overview&from=2024-06-01&to=2024-06-10" target='_blank' rel='noopener noreferrer'>
                    Ayisha Ilyas
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://images.unsplash.com/photo-1637778352878-f0b46d574a04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdpdGh1YnxlbnwwfHwwfHx8MA%3D%3D" />
        </div>
    </div>
  )
}
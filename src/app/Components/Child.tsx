



export default function Child (props: any){
    return (
        <div className="w-full">

            {props.Cars.map((veh: any) => {

                    return(
                <div className="flex justify-center space-x-10 my-6 bg-blue-900 items-center h-20 w-full">

                    <div><h1>{veh.carName}</h1></div>

                    <div><h1 className="">Price Is {veh.carPrice}</h1></div>

                    <div><h1 className="text-center">Reviews Is {veh.carReviews}</h1></div>

                    <div><h1 className="text-center">Model {veh.carModel}</h1></div>
                    
                    </div>
                )
                })}

        </div>
    )
}
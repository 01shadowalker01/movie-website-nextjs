import { Card } from "@radix-ui/themes"
import Image from "next/image"

const MovieCard = () => {
    return (
        <Card className="!flex flex-col gap-1 items-center flex-grow-0 flex-shrink-0 basis-[23%]">
            <Image src="/images/poster.jpg" alt="Poster" width="150" height={200} />
            <h3 className="font-bold">Title</h3>
            <p>Overview: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, totam? Inventore, sed excepturi maxime perferendis tempora natus animi ab voluptatum fugit possimus expedita facere sunt, optio provident magnam at esse?</p>
        </Card>
    )
}

export default MovieCard
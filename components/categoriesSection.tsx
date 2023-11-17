import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  interface categoriesSectionProps {
    title: string;
    icon?: JSX.Element;
  }
  

  const categoriesSection: React.FC<categoriesSectionProps> = ({
    title,
    icon,
    }) => {
  return (
    <div>
    <Card className='text-center justify-center border-dashed border-2 border-black rounded-[30px]'>
        <CardHeader>
            <div className='bg-blue-100 w-min p-3 rounded-[30px] mr-1 self-center'>
                {icon && <div className="icon">{icon}</div>}
            </div>
        </CardHeader>
        <CardContent>
            <h3 className='text-lg font-bold mb-2'>{title}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ornare convallis est ac venenatis. Ut non dui sit amet erat egestas viverra. Morbi sed feugiat mauris</p>
        </CardContent>
    </Card>

    </div>
  )
}

export default categoriesSection

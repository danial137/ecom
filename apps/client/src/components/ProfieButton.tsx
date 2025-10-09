"use client"

import { UserButton } from '@clerk/nextjs'
import { ShoppingBag } from 'lucide-react'
import { useRouter } from 'next/navigation'

import React from 'react'

const ProfieButton = () => {
    const router = useRouter()
    return (
        <UserButton>
            <UserButton.MenuItems>
                <UserButton.Action label='See Order' labelIcon={<ShoppingBag className='w-4'/> } onClick={()=>router.push('/orders')}/>
            </UserButton.MenuItems>
        </UserButton>
    )
}

export default ProfieButton
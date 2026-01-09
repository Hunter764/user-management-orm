import React from 'react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { createUser } from '@/actions'

const UserForm = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 transition-all duration-[2000ms] ease-in-out">
        <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-6 uppercase tracking-wide transition-colors duration-[2000ms] ease-in-out">New User</h2>
        <form action={createUser} className='space-y-5'>
            <div className='space-y-2'>
                <Label htmlFor='name' className="text-xs font-medium text-gray-600 dark:text-gray-400">Name</Label>
                <Input 
                    type='text' 
                    name='name' 
                    id='name' 
                    className="border-gray-200 dark:border-gray-800 focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-100"
                    placeholder='John Doe'
                    required
                />
            </div>
            <div className='space-y-2'>
                <Label htmlFor='email' className="text-xs font-medium text-gray-600 dark:text-gray-400">Email</Label>
                <Input 
                    type='email' 
                    name='email' 
                    id='email' 
                    className="border-gray-200 dark:border-gray-800 focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-100"
                    placeholder='john@example.com'
                    required
                />
            </div>
            
            <Button type='submit' className='w-full mt-6 bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:hover:bg-gray-200 dark:text-gray-900'>
                 Add User
            </Button>
        </form>
    </div>
  )
}

export default UserForm
import React from 'react'

import {Button} from "@/components/ui/button"
import {deleteUser ,  getAllUsers} from '@/actions'
import { Trash2 } from 'lucide-react'


export async function UserList(){
    const users = await getAllUsers();
    console.log(users);

    if(!Array.isArray(users) || users.length ===0){
        return (
            <div className="border border-dashed border-gray-300 dark:border-gray-800 rounded-lg p-12">
                <p className='text-center text-sm text-gray-400'>{!Array.isArray(users) ? "Database not connected" : "No users yet"}</p>
            </div>
        )
    }

    return(
        <div className='space-y-2'>
            {users.map((user) => (
                <div key={user.id} className="group border border-gray-200 dark:border-gray-800 rounded-lg p-5 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
                    <div className='flex items-start justify-between'>
                        <div className='flex-1 min-w-0'>
                            <div className='flex items-center gap-3 mb-1'>
                                <h3 className='font-medium text-gray-900 dark:text-gray-100 truncate'>
                                    {user.name}
                                </h3>
                                {user.isActive && (
                                    <span className="inline-flex h-2 w-2 rounded-full bg-green-500"/>
                                )}
                            </div>
                            <p className='text-sm text-gray-500 dark:text-gray-400 truncate'>{user.email}</p>
                            <p className='text-xs text-gray-400 dark:text-gray-500 mt-2'>
                                {user.createdAt?.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                            </p>
                        </div>
                        <form action={deleteUser.bind(null, user.id)}>
                            <Button 
                                variant="ghost" 
                                size='sm' 
                                type="submit"
                                className="opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950 dark:hover:text-red-400"
                            >
                                <Trash2 className="h-4 w-4"/>
                            </Button>
                        </form>
                    </div>
                </div>
            ))}
        </div>
    )
}


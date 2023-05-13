import React from 'react'
import { DashNav } from '../../../components/Admin/DashNav'
import AddNewFoodForm from '../../../components/Admin/AddingComponents/AddNewFoodForm'

export default function AddNewFood() {
  return (
    <div className='flex'>
        <DashNav/>
        <AddNewFoodForm/>
    </div>
  )
}

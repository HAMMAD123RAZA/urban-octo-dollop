import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import {db} from '../../firebase/Configs'
import { collection, getDocs, limit, query } from '@firebase/firestore'
import MealsCard from '../../components/MealsCard'
import { Colors } from '../../constants/Colors'
const MyMeal = () => {
  const [data, setdata] = useState()


  useEffect(()=>{
      getData()
  },[])

  const getData=async()=>{
      try {
          const q=query(collection(db,'mealsList'))
          const snap=await getDocs(q)
          const data=snap.docs.map((doc)=>({id:doc.id,...doc.data()}))
          setdata(data)
          console.log(data)
      } catch (error) {
          console.log(error)
      }   
  }

  const renderItem=({item})=>{
      return (
          <View>
              <MealsCard item={item} />
          </View>
      )
  }

return (
  <View className='py-7' >
    <Text className='font-bold py-2 pl-6 text-4xl' style={{color:Colors.primary}} >MealList</Text>
    <FlatList data={data} renderItem={renderItem} />
  </View>
)
}

export default MyMeal
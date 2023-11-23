import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Task from './components/Task';
import { Platform } from 'react-native';
import { useState } from 'react';

export default function App() {
  const[task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
   /* Keyboard.dismiss();*/
    setTaskItems([...taskItems, task])
    setTask(null);
  }

const completeTask = (index) => {
  let itemsCopy =[...taskItems];
  itemsCopy.splice(index, 1);
  setTaskItems(itemsCopy);
}

  return (
    <View style={styles.container}>
      {/* To do List*/}
      <View style={styles.taskWrapper}>
       <Text style={styles.sectionTitle}> To Do List</Text>
        
        <View style={styles.items}>
          {/*list of  task*/}
            {
              taskItems.map((item, index) =>{
                return (
                 <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                    <Text text={item} />
                    <Task text={'task'}/>
                    
                 </TouchableOpacity>
              )
              
            })
          }

        </View>

      </View>
      

      {/*create a task*/}
      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
        >
         <TextInput style={styles.input} placeholder={'Write a Task'} value={task} onChange={text => setTask(text)} />
      
         <TouchableOpacity onPress={() => handleAddTask()}>
           <View style={styles.addWrapper}></View>
           <Text style={styles.addText}></Text>
         </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  taskWrapper: {
    paddingTop: 75,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 35,
    fontWeight:'bold',
    textAlign:'center',
    
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'relative',
    button: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 60,
    borderColor: 'orange',
    borderWidth: 2, 
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: 'red',
    borderRadius: 60,
    justifyContent: 'space-evenly',
    alignItems: 'baseline',
    borderColor: 'orange',
    borderWidth: 2,
  },
  addText: {},
});

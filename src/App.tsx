import './App.css'
import Navbar from './components/Navbar/Navbar'
import CardList from './components/CardList/CardList'

function App() {
  return (
    <div>
      <Navbar />
      <CardList 
        cards={[
          { id: '1', title: 'Card 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vehicula quam non mi commodo, ut commodo ex gravida. Sed lacinia vitae purus laoreet imperdiet. Fusce maximus consequat velit, vitae viverra lorem fringilla semper. Nunc id massa id ligula mollis tristique nec vel massa. Vivamus congue convallis iaculis. Fusce id nibh vulputate felis pretium laoreet. Fusce hendrerit id magna et luctus. Mauris et turpis bibendum, vestibulum leo a, laoreet nisi.' },
          { id: '2', title: 'Card 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vehicula quam non mi commodo, ut commodo ex gravida. Sed lacinia vitae purus laoreet imperdiet. Fusce maximus consequat velit, vitae viverra lorem fringilla semper. Nunc id massa id ligula mollis tristique nec vel massa. Vivamus congue convallis iaculis. Fusce id nibh vulputate felis pretium laoreet. Fusce hendrerit id magna et luctus. Mauris et turpis bibendum, vestibulum leo a, laoreet nisi.' },
          { id: '3', title: 'Card 3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vehicula quam non mi commodo, ut commodo ex gravida. Sed lacinia vitae purus laoreet imperdiet. Fusce maximus consequat velit, vitae viverra lorem fringilla semper. Nunc id massa id ligula mollis tristique nec vel massa. Vivamus congue convallis iaculis. Fusce id nibh vulputate felis pretium laoreet. Fusce hendrerit id magna et luctus. Mauris et turpis bibendum, vestibulum leo a, laoreet nisi.' }
        ]}
      />
    </div>
  )
}

export default App

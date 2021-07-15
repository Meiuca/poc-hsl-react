import './App.css';
import DSCardContent from '@meiuca/design-system/dist/component/cardContent.bundle';

function App() {
  return (
    <div className="App">
      <DSCardContent
        heading= "Heading SM"
        subtitle= "Subtitle SM"
        paragraph= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer when an unknown printer took a galley of type and scrambled."
        button= "Button Label">
      </DSCardContent>
    </div>
  );
}

export default App;

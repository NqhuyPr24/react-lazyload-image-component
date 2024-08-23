import { LazyLoadImage } from "./components"
import placeholder from './assets/placeholder.jpg'

const images: string[] = [
  'https://cdnb.artstation.com/p/assets/images/images/079/246/733/large/mike-azevedo-01.jpg?1724365932',
  'https://cdnb.artstation.com/p/assets/images/images/079/245/737/large/andrew-baker-hod-vermithor-horndesignsr2-ab-002.jpg?1724363095',
  'https://cdna.artstation.com/p/assets/images/images/079/200/014/large/pablo-dominguez-noise008723.jpg?1724253242',
  'https://cdna.artstation.com/p/assets/images/images/079/200/122/large/frank-torrealba-ow2juno01.jpg?1724253394',
  'https://cdnb.artstation.com/p/assets/images/images/079/119/827/large/sina-hayati-three-brothers-outpost-sina-hayati.jpg?1724049978',
  'https://cdnb.artstation.com/p/assets/images/images/078/333/533/large/luc-fontenoy-lfontenoy-001.jpg?1721818904',
  'https://cdnb.artstation.com/p/assets/images/images/079/237/905/large/w-z-.jpg?1724346726',
  'https://cdna.artstation.com/p/assets/images/images/079/119/772/large/sina-hayati-shipwreck-sina-hayati.jpg?1724049689',
  'https://cdna.artstation.com/p/assets/images/images/079/124/634/large/athena-productions-well-final-6-1.jpg?1724062639',
  'https://cdna.artstation.com/p/assets/images/images/079/202/264/large/darek-zabrocki-comp7-002.jpg?1724256733',
  'https://cdnb.artstation.com/p/assets/images/images/079/243/225/large/anastasiya-osichkina-highresscreenshot00000.jpg?1724357161',
  'https://cdna.artstation.com/p/assets/images/images/079/120/010/large/sina-hayati-hunting-crocodile-sina-hayati.jpg?1724050581',
  'https://cdna.artstation.com/p/assets/images/images/079/196/376/large/nicolas-vanhemelryck-render-3-4-01.jpg?1724246018',
  'https://cdnb.artstation.com/p/assets/images/images/079/144/807/large/alexander-agredo-7.jpg?1724101586',
  'https://cdna.artstation.com/p/assets/images/images/079/005/404/large/kobe-sek-sab-portfolio-tot-kobe.jpg?1723688474',
  'https://i.pinimg.com/236x/f4/4c/b9/f44cb9b5f64a60d95b78b3187f459ccd.jpg',

]

const App = () => {

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      margin: '20px',
      gap: "20px"
    }}>
      {images.map(item => {
        return (
          <div key={item}
            style={{
              width: 400
            }}
          >
            <div
              className="test-img-container"
            >
              <LazyLoadImage
                className="test-img-item"
                src={item}
                // placeholderSrc={placeholder}
                effect="blur"
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default App

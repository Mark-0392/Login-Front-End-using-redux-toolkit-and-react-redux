import milkyway from '../../src/assets/Mobile background Image/milkyway.jpg'
import amsterdam from '../../src/assets/Mobile background Image/image6.jpg'
import About from '../../src/assets/About.png'
import Login from '../../src/assets/diamond-sunset.png'
import Register from '../../src/assets/flat-mountains.png'

const Credits = () => {
  return (
    <div className="grid place-items-center max-sm:h-[calc(100%-40px)] md:h-[calc(100%-44px)] lg:h-[calc(100%-52px)] grid-rows-1">
      <div className="w-full max-w-xl mx-auto px-2 flex flex-col gap-y-4">
        <h1 className="">
          I would like to thank everyone who helped me achieve this with their
          contribution with a free of charge.
        </h1>
        <div className="flex flex-col h-60 border px-4 py-4 divide-y-2  divide-black">
          <div className="flex gap-x-2 items-center py-2">
            <div className="w-10 h-13">
              <img src={milkyway} alt="milkyway image" />
            </div>
            <p className="uppercase"> - eberhard grossgasteiger</p>
          </div>
          <div className="flex gap-x-2 items-center py-2">
            <div className="w-10 h-13">
              <img src={amsterdam} alt="amsterdam image" />
            </div>
            <p className="uppercase"> - Anh Nguyen</p>
          </div>
          <div className="flex gap-x-2 items-center py-2">
            <div className="w-10 h-13">
              <img src={About} alt="about page image" />
            </div>
            <div className="w-10 h-13">
              <img src={Login} alt="about page image" />
            </div>
            <div className="w-10 h-13">
              <img src={Register} alt="about page image" />
            </div>
            <p className="uppercase"> - Anh Nguyen</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Credits

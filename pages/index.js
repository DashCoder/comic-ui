import Image from 'next/image'
import { Roboto } from 'next/font/google'

const font1 = Roboto({
    weight: '700',
    subsets: ['latin'],
    display: 'swap',
})

export default function Home(props) {
  return (
    <>
      <h1 className={font1.className}>My Comic</h1>
      {props.panels.map((panel, index) => {
        return (
          <div key={index} className="imagepanel">
            <Image
              src={`${panel.url}`}
              width={500}
              height={500}
              alt={panel.title}
            />
            <div className="speechpanel"><blockquote className="speech bubble">{panel.content}</blockquote></div>
            <p>&nbsp;</p>
          </div>
        )
      })}
    </>
  )
}

export async function getStaticProps() {
  const response = await fetch("https://ukfilestore1.blob.core.windows.net/demo/demo.json?si=Internet%20User&sv=2022-11-02&sr=c&sig=YQ7JTn6H7JiBW%2BUKlQ399BurziR8WtAAkJVarIonWOY%3D")
  const data = await response.json()

  return {
    props: {
      panels: data.panels
    }
  }
}
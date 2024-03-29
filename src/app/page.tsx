import HeadComponent from "@/components/Home/Head";
import ImageGallery from "@/components/Home/ImageGallery";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

export default function Home() {
  return (
    <div>
      <HeadComponent text="Hi, My name is Tintin." />
      {/* <HeadComponent text="Hi, My name is Tintin."></HeadComponent> */}
      <p className="mt-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
        dignissim, ipsum nec fermentum consectetur, sem neque scelerisque nisi,
        id mollis nulla diam sit amet mauris. Nullam varius, purus in pulvinar
        egestas, urna lectus consequat ligula, posuere eleifend justo erat quis
        mi. Duis tincidunt semper dolor, in luctus quam. Nunc varius fermentum
        lectus sit amet pharetra. Phasellus eget risus sit amet elit accumsan
        euismod. Suspendisse tempus eu nulla vitae vehicula. Fusce commodo
        finibus magna rhoncus mollis. Donec non tortor a ex pellentesque
        faucibus. Morbi nunc metus, congue sed velit ac, condimentum venenatis
        purus. Integer dignissim ut neque id pharetra. Mauris ut arcu pretium
        sem aliquet faucibus. Aliquam ultrices ut ipsum ac imperdiet. Vestibulum
        ultrices quam vel purus feugiat, consectetur sagittis dolor eleifend.
      </p>
      <ImageGallery />
      <p className="mt-10">
        In tortor lorem, commodo quis varius in, luctus non nisl. Vestibulum
        eleifend nisi posuere tempus dictum. Aenean auctor nisl elit, at
        sagittis augue finibus vitae. Pellentesque tincidunt massa nec ultrices
        euismod. Praesent consectetur sollicitudin massa, non finibus libero
        lacinia a. Morbi convallis neque id ipsum pretium, at luctus orci
        tincidunt. Cras non dignissim dui. Aliquam suscipit mauris et finibus
        placerat. Quisque condimentum at massa sed congue. Morbi tempus ornare
        tempus. Morbi tincidunt et ante id congue. Pellentesque sollicitudin
        augue lacus, a efficitur turpis ultrices ut.
      </p>
      <div className="flex gap-x-3">
        <div className="grid grid-cols-4 items-center h-fit bg-gray-500 p-2 my-10 rounded-md">
          <Image
            width={100}
            height={100}
            alt="profile"
            src={
              "https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg"
            }
            className="rounded-full"
          />
          <div className="flex flex-col justify-start text-start col-span-2 px-2">
            <div>@Tintin</div>
            <div className="text-slate-200">123,456 subscribers</div>
          </div>
          <MdArrowOutward className="justify-self-end" />
        </div>
        <div className="grid grid-cols-4 items-center h-fit bg-gray-500 p-2 mt-10 rounded-md">
          <Image
            width={100}
            height={100}
            alt="profile"
            src={
              "https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg"
            }
            className="rounded-full"
          />
          <div className="flex flex-col justify-start text-start col-span-2 px-2">
            <div>@Tintin</div>
            <div className="text-slate-200">123,456 subscribers</div>
          </div>
          <MdArrowOutward className="justify-self-end" />
        </div>
      </div>
      <p className="mt-5">
        Pellentesque tellus elit, blandit posuere erat vestibulum, pretium
        porttitor sapien. Vestibulum sed leo non erat blandit gravida posuere
        sed ligula. Vestibulum elementum quis turpis sed sagittis. Pellentesque
        iaculis magna odio, et molestie ex efficitur non. Maecenas pretium
        ultrices nisl. Proin laoreet congue nisi in convallis. Proin posuere
        sodales dui, congue convallis nisl auctor et. Sed vel orci luctus,
        volutpat dui id, aliquam sapien. Vivamus pretium lobortis enim finibus
        vulputate. Praesent posuere, turpis in congue malesuada, felis sem
        lacinia nibh, eu volutpat nibh ex sit amet nisl. Sed cursus magna et
        lorem varius, non dignissim leo malesuada. Nulla ac volutpat turpis.
      </p>
      <div className="grid grid-cols-3 min-h-24 items-center h-fit bg-gray-500 p-2 my-10 rounded-md">
        <div className="flex flex-col justify-start text-start col-span-2 px-2">
          <div>@Tintin</div>
          <div className="text-slate-200">123,456 subscribers</div>
        </div>
        <MdArrowOutward className="justify-self-end" />
      </div>
      I invest small angel checks into early stage startups building tools for
      developers.
      <div className="flex gap-x-5">
        <Link href={"www.google.com"} className=" flex gap-x-1 mt-10">
          <MdArrowOutward />
          Google
        </Link>
        <Link href={"www.google.com"} className=" flex gap-x-1 mt-10">
          <MdArrowOutward />
          Google
        </Link>{" "}
      </div>
    </div>
  );
}

import launchVehicleLC from "../assets/technology/image-launch-vehicle-landscape.jpg";
import launchVehiclePT from "../assets/technology/image-launch-vehicle-portrait.jpg";
import spaceportLC from "../assets/technology/image-spaceport-landscape.jpg";
import spaceportPT from "../assets/technology/image-spaceport-portrait.jpg";
import spacecapsuleLC from "../assets/technology/image-space-capsule-landscape.jpg";
import spacecapsulePT from "../assets/technology/image-space-capsule-portrait.jpg";

const technologies = [
	{
		name: "LAUNCH VEHICLE",
		images: {
			portrait: launchVehiclePT,
			landscape: launchVehicleLC,
		},
		description:
			"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
	},
	{
		name: "SPACEPORT",
		images: {
			portrait: spaceportPT,
			landscape: spaceportLC,
		},
		description:
			"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
	},
	{
		name: "SPACE CAPSULE",
		images: {
			portrait: spacecapsulePT,
			landscape: spacecapsuleLC,
		},
		description:
			"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
	},
];

export { technologies };

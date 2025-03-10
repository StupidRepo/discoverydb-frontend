import type { MetaFunction } from "@remix-run/node";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "components/ui/tabs";
import { ServerPage } from "components/pages/serverpage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBolt, faCloudBolt,
	faMessage,
	faMobileAndroid, faPooBolt,
	faRobot
} from "@fortawesome/free-solid-svg-icons";

export const meta: MetaFunction = () => {
	return [
		{ title: "DiscoveryDB" },
		{
			property: "og:title",
			content: "DiscoveryDB",
		},
		{
			name: "description",
			content: "DiscoveryDB is an open-source Revolt discovery platform.",
		},
	];
};

export default function Index() {
	return (
		<Tabs defaultValue="servers" className="h-screen bg-black flex flex-col">
			<header className="sticky top-0 z-10 p-4 border-b-2 bg-black flex flex-col lg:flex-row lg:justify-evenly items-center">
				<h1 className="lg:text-2xl text-xl font-bold text-white">DiscoveryDB</h1>
				<TabsList className="flex gap-4 justify-center mt-4 lg:mt-0">
					<TabsTrigger value="servers" className="text-white">
						<FontAwesomeIcon icon={faMessage} className="mr-2" />
						Servers
					</TabsTrigger>
					<TabsTrigger value="bots" className="text-white">
						<FontAwesomeIcon icon={faRobot} className="mr-2" />
						Bots
					</TabsTrigger>
					<TabsTrigger value="clients" className="text-white">
						<FontAwesomeIcon icon={faBolt} className="mr-2" />
						Clients
					</TabsTrigger>
				</TabsList>
			</header>
			<section className="p-4 flex-1 overflow-auto">
				<TabsContent value="servers">
					<ServerPage />
				</TabsContent>
				<TabsContent value="bots">
					<h1 className="text-4xl font-medium text-white">Bots!</h1>
				</TabsContent>
				<TabsContent value="clients">
					<h1 className="text-4xl font-medium text-white">Clients :D</h1>
				</TabsContent>
			</section>
		</Tabs>
	);
}
import type { MetaFunction } from "@remix-run/node";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "components/ui/tabs";
import {ServerCard} from "components/cardsnstuff/server";

export default function Index() {
    return (
        <main className="flex flex-col h-screen bg-black">
            <header className="p-4 border-b-2">
                <h1 className="text-2xl font-bold text-white">DiscoveryDB</h1>
            </header>
            <Tabs defaultValue="servers" className="h-full">
                <div className="flex h-full">
                    <section className="w-1/6 p-4">
                        <TabsList className="flex flex-col space-y-2">
                            <TabsTrigger value="servers" className="text-white">
                                Servers
                            </TabsTrigger>
                            <TabsTrigger value="bots" className="text-white">
                                Bots
                            </TabsTrigger>
                            <TabsTrigger value="clients" className="text-white">
                                Clients
                            </TabsTrigger>
                        </TabsList>
                    </section>
                    <section className="w-5/6 p-4">
                        <TabsContent value="servers">
                            <div className="grid grid-cols-4 gap-8"> {/* 12 cards for testing */}
                                <ServerCard />
                                <ServerCard />
                                <ServerCard />
                                <ServerCard />
                                <ServerCard />
                                <ServerCard />
                                <ServerCard />
                                <ServerCard />
                                <ServerCard />
                                <ServerCard />
                                <ServerCard />
                                <ServerCard />
                                <ServerCard />
                            </div>
                        </TabsContent>

                        <TabsContent value="bots">
                            <h1 className="text-4xl font-medium text-white">Bots!</h1>
                        </TabsContent>

                        <TabsContent value="clients">
                            <h1 className="text-4xl font-medium text-white">Clients :D</h1>
                        </TabsContent>
                    </section>
                </div>
            </Tabs>
        </main>
    );
}
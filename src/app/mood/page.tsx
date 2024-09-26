'use client';
import Navbar from '@/components/ui/navbarTailwind'
import { Angry, Frown, Laugh, Meh, Smile, Heart } from 'lucide-react';
import { Card } from "@/components/ui/card"

import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
    } from "@/components/ui/drawer"
import { useState } from 'react';


export default function Articles() {
    const [activeTriger, setActiveTrigger] = useState('')
    return (
        <div>
            <Navbar></Navbar>
            <section style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', minHeight: 400, width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
                <Drawer>
                    <DrawerTrigger onClick={() => setActiveTrigger('angry')}>
                        <Card style={{ padding: 20, backgroundColor: 'red' }}>
                            <Angry size={100} />
                        </Card>
                    </DrawerTrigger>

                    <DrawerTrigger onClick={() => setActiveTrigger('frown')}>
                        <Card style={{ padding: 20, backgroundColor: 'orange' }}>
                            <Frown size={100} />
                        </Card>
                    </DrawerTrigger>

                    <DrawerTrigger onClick={() => setActiveTrigger('laugh')}>
                        <Card style={{ padding: 20, backgroundColor: 'green' }}>
                            <Laugh size={100}/>
                        </Card>
                    </DrawerTrigger>

                    <DrawerTrigger onClick={() => setActiveTrigger('meh')}>
                        <Card style={{ padding: 20, backgroundColor: 'salmon' }}>
                            <Meh size={100} />
                        </Card>
                    </DrawerTrigger>

                    <DrawerTrigger onClick={() => setActiveTrigger('smile')}>
                        <Card style={{ padding: 20, backgroundColor: 'lightgreen' }}>
                            <Smile size={100} />
                        </Card>
                    </DrawerTrigger>

                    <DrawerTrigger onClick={() => setActiveTrigger('heart')}>
                        <Card style={{ padding: 20, backgroundColor: 'coral' }}>
                            <Heart size={100} />
                        </Card>
                    </DrawerTrigger>

                    <DrawerContent>
                        <DrawerHeader>
                            <DrawerTitle></DrawerTitle>
                            <DrawerDescription>
                                {activeTriger === 'angry'
                                ?
                                <section style={{display: 'flex', justifyContent:'space-around'}}>
                                    <div>
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=Brd7beyqWBHPPh8l" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                                    </div>
                                    <div style={{width: '40%', marginBottom: 20}}>
                                        <h2 style={{ paddingBottom: 20, fontSize: 30}}>la phrase du jour: </h2>
                                        <p style={{fontSize: 18, lineHeight: 1.5}}>Je ne comprends pas comment tu arrives à être aussi confiant alors que tu te trompes presque tout le temps.</p>
                                    </div>
                                </section>
                                :
                                null
                                }
                                {activeTriger === 'frown'
                                ?
                                <div>
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/pVHKp6ffURY?si=3BRpKAAjKTj4CEeb" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                                </div>
                                :
                                null
                                }
                            </DrawerDescription>
                        </DrawerHeader>
                    </DrawerContent>
                </Drawer>
            </section>
        </div>
    );
}
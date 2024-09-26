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
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/pVHKp6ffURY?si=3BRpKAAjKTj4CEeb" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                                    </div>
                                    <div style={{width: '40%', marginBottom: 20}}>
                                        <h2 style={{ paddingBottom: 20, fontSize: 30}}>la phrase du jour: </h2>
                                        <p style={{fontSize: 18, lineHeight: 1.5}}>Je ne comprends pas comment tu arrives à être aussi confiant alors que tu te trompes presque tout le temps.</p>
                                    </div>
                                </section>
                                :
                                null
                                }
                                {
                                activeTriger === 'frown'
                                ?
                                <section style={{display: 'flex', justifyContent:'space-around'}}>
                                    <div>
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/gy8HPSIFXEM?si=rmoSsMLE5F06rYgp" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                                    </div>
                                    <div style={{width: '40%', marginBottom: 20}}>
                                        <h2 style={{ paddingBottom: 20, fontSize: 30}}>la phrase du jour: </h2>
                                        <p style={{fontSize: 18, lineHeight: 1.5}}>Parfois, tout ce dont j'ai besoin, c'est d'une pause… du monde entier.</p>
                                        <p style={{ paddingTop: 6, fontSize: 12, fontWeight: '700'}}>Samantha Young</p>
                                    </div>
                                </section>
                                :
                                null
                                }
                                {
                                activeTriger === 'laugh'
                                ? 
                                <section style={{display: 'flex', justifyContent:'space-around'}}>
                                    <div>
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ZbZSe6N_BXs?si=AQgti5I7KgEwqJzJ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                                    </div>
                                    <div style={{width: '40%', marginBottom: 20}}>
                                        <h2 style={{ paddingBottom: 20, fontSize: 30}}>la phrase du jour: </h2>
                                        <p style={{fontSize: 18, lineHeight: 1.5}}>Le bonheur est réel sachez que vous pouvez également le partager."</p>
                                        <p style={{ paddingTop: 6, fontSize: 12, fontWeight: '700'}}>Christopher McCandless</p>
                                    </div>
                                </section>
                                :
                                null
                                }
                                {
                                activeTriger === 'meh'
                                ?
                                <section style={{display: 'flex', justifyContent:'space-around'}}>
                                    <div>
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/USml7qmGF_c?si=Sdyh-Ayh1oa6FGtO" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                                    </div>
                                    <div style={{width: '40%', marginBottom: 20}}>
                                        <h2 style={{ paddingBottom: 20, fontSize: 30}}>la phrase du jour: </h2>
                                        <p style={{fontSize: 18, lineHeight: 1.5}}>Il n'y a pas de chemin vers le bonheur, le bonheur est le chemin.</p>
                                        <p style={{ paddingTop: 6, fontSize: 12, fontWeight: '700'}}>Bouddha</p>
                                    </div>
                                </section>
                                :
                                null
                                }
                                {
                                activeTriger === 'smile'
                                ?
                                <section style={{display: 'flex', justifyContent:'space-around'}}>
                                    <div>
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/sok8kp_DSqE?si=Tz3mjiYDh07pzzHH" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                                    </div>
                                    <div style={{width: '40%', marginBottom: 20}}>
                                        <h2 style={{ paddingBottom: 20, fontSize: 30}}>la phrase du jour: </h2>
                                        <p style={{fontSize: 18, lineHeight: 1.5}}>Le bonheur est un choix. Vous pouvez choisir d'être heureux.</p>
                                        <p style={{ paddingTop: 6, fontSize: 12, fontWeight: '700'}}>Valerie Bertinelli</p>
                                    </div>
                                </section>
                                :
                                null
                                }
                                {
                                activeTriger === 'heart'
                                ?
                                <section style={{display: 'flex', justifyContent:'space-around'}}>
                                    <div>
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/DF3XjEhJ40Y?si=s6huZDc0A93okqdH" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                                    </div>
                                    <div style={{width: '40%', marginBottom: 20}}>
                                        <h2 style={{ paddingBottom: 20, fontSize: 30}}>la phrase du jour: </h2>
                                        <p style={{fontSize: 18, lineHeight: 1.5}}>Être amoureux, c'est sentir que le monde est un endroit magnifique.</p>
                                        <p style={{ paddingTop: 6, fontSize: 12, fontWeight: '700'}}>Gabriel García Márquez</p>
                                    </div>
                                </section>
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
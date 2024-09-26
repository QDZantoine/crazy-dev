'use client';
import Navbar from '@/components/ui/navbarTailwind'
import { Angry, Frown, Annoyed, Laugh, Meh, Smile, Heart } from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


export default function Articles() {


    return (
        <div>
            <Navbar></Navbar>
            <section style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', minHeight: 400, width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
                <Card style={{ padding: 20, backgroundColor: 'red' }}>
                    <Angry size={100} />
                </Card>

                <Card style={{ padding: 20, backgroundColor: 'orange' }}>
                    <Frown size={100} />
                </Card>

            
                <Card style={{ padding: 20, backgroundColor: 'green' }}>
                <Laugh size={100}/>
                </Card>
                <Card style={{ padding: 20, backgroundColor: 'salmon' }}>
                    <Meh size={100} />
                </Card>

                <Card style={{ padding: 20, backgroundColor: 'lightgreen' }}>
                    <Smile size={100} />
                </Card>

                <Card style={{ padding: 20, backgroundColor: 'coral' }}>
                    <Heart size={100} />
                </Card>

            </section>

        </div>
    );
}
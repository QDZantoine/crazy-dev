'use client';
import Navbar from '@/components/ui/navbarTailwind'
import { Angry, Frown, Annoyed, Laugh, Meh, Smile, Heart } from 'lucide-react';



export default function Articles() {


    return (
        <div>
            <Navbar></Navbar>
            <section style={{display:'flex', justifyContent: 'space-around'}}>

                <Angry size={100} color='red'/>
                <Annoyed size={100} color='yellow'/>
                <Frown size={100} color='orange'/>
                <Laugh size={100} color='green'/>
                <Meh size={100} color='salmon'/>
                <Smile size={100} color='lightgreen'/>
                <Heart size={100} color='coral'/>

            </section>

        </div>
    );
}
<?php

namespace Bmut\Tomeuferments\Components;

use Bmut\Tomeuferments\Models\Contact;
use Cms\Classes\ComponentBase;
use Illuminate\Support\Facades\Mail;
use October\Rain\Support\Facades\Flash;

/**
 * ContactForm Component
 *
 * @link https://docs.octobercms.com/3.x/extend/cms-components.html
 */
class ContactForm extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name' => 'Contact Form Component',
            'description' => 'No description provided yet...'
        ];
    }

    /**
     * @link https://docs.octobercms.com/3.x/element/inspector-types.html
     */
    public function defineProperties()
    {
        return [];
    }
    // function onSend()
    // {

    //     // Collect input
    //     $name = post('name');
    //     $email = post('email');
    //     $phone = post('phone');
    //     $legal = post('legal');

    //     $contact = Contact::create(['name' => $name, 'email' => $email, 'phone' => $phone, 'legal' => $legal]);

    //     Mail::send(
    //         'tomeuferments::mail.contact',
    //         $contact->toArray(),
    //         function ($message) {
    //             $message->from('tomeuferments@gmail.com', 'Tomeu Ferments');
    //             $message->to('tomeuferments@gmail.com', 'Tomeu Ferments');
    //             dd($message);
    //         }
    //     );

    //     Flash::success('El formulario ha sido enviado con exito');
    // }
    public function onSend()
{
    try {
        // Collect input
        $name  = post('name');
        $email = post('email');
        $phone = post('phone');
        $legal = post('legal');

        // Guardar en la base de datos
        $contact = Contact::create([
            'name'  => $name,
            'email' => $email,
            'phone' => $phone,
            'legal' => $legal
        ]);

        // Enviar email
        Mail::send('tomeuferments::mail.contact', $contact->toArray(), function ($message) use ($email, $name) {
            $message->from('web@tomeuferments.es', 'Tomeu Ferments');
            $message->to('tomeuferments@gmail.com', 'Tomeu Ferments');
            $message->replyTo($email, $name); // opcional, para poder responder al remitente
        });

        // Mensaje de éxito
        Flash::success('✅ El formulario ha sido enviado con éxito');

    } catch (\Exception $ex) {
        // Mensaje de error
        Flash::error('❌ Hubo un error al enviar el formulario: ' . $ex->getMessage());
    }
}
}

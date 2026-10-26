export interface Attendant {
  id: 'brandao' | 'santos';
  name: string;
  role: string;
  phone: string;
  formattedPhone: string;
  avatarLetter: string;
  status: string;
}

export const ATTENDANTS: Attendant[] = [
  {
    id: 'brandao',
    name: 'Atendente Brandão',
    role: 'Consultoria de Posts & Orçamentos',
    phone: '5511985210969',
    formattedPhone: '(11) 98521-0969',
    avatarLetter: 'B',
    status: 'Online agora',
  },
  {
    id: 'santos',
    name: 'Atendente Santos',
    role: 'Estratégia & Atendimento Personalizado',
    phone: '5511995100875',
    formattedPhone: '(11) 99510-0875',
    avatarLetter: 'S',
    status: 'Online agora',
  },
];

export function getWhatsAppUrl(phone: string, attendantName: string, customMessage?: string): string {
  const defaultText = `Olá ${attendantName}! Vi a landing page da Essenza Estúdio e gostaria de solicitar um orçamento para os posts do Instagram da minha empresa.`;
  const text = customMessage || defaultText;
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

export interface PostWork {
  id: number;
  title: string;
  niche: string;
  strategy: string;
  description: string;
  aspect: '1:1' | '4:5';
  imageUrl: string;
  likes: string;
  comments: string;
  shares: string;
}

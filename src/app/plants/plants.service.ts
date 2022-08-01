import { Injectable } from "@angular/core";
import { Herbal } from '../herbal/herbal.model';

@Injectable({
    providedIn: 'root',
})
export class PlantService {
    getHerbal(): Herbal[] {
        return [
            {
              plants: 'akapulko',
              name: 'AKAPULKO',
              sname:'Cassia Alata',
              images:'assets/Herbal Plants/Akapulko.jpg',
              description: 'Ringworm Bush. Bayas-bayasan.This plant is about 1 to 12 meters all. The leaves are embraced with 8 to 20 oblong-elliptical shaped leafleats. It has flowers with oblong sepals. ',
              use:'Anti-Fungal Tinea flava. Ring worm. Athales foots and scabies.',
              preparation:'Fresh, matured leavesare pounded. Apply as soap to the affected part 1 to 2 times a day.',
            },
            {
              plants: 'ampalaya',
              name: 'AMPALAYA',
              sname:' Momordica',
              images:'assets/Herbal Plants/Ampalaya.jpg',
              description: 'Bitter gourd or Bitter Melon. A climbing vine with tendrils that grown up to 20 cm long. '+
              'Leaves are heart shaped, which are 5 to 10 cm in deameter. Fruits have ribbed and wrinkled surface that fleshly'+
              'green with pointed ends at length and has a bitter taste. ',
              use:'Lower blood sugar levels. Diabetes mellitus (mild-non insulin dependent)',
              preparation:' 	Gather and wash young leaves very well. Chop. Boil 6 tablespoons in two glassfuls of water for 15 minutes under low fire.' + 
              'Do not cover pot. Cool and strain. Take one third cup 3 times a day after meals',
            },
            {
              plants: 'bawang',
              name: 'BAWANG',
              sname:'Allimum Sativum',
              images:'assets/Herbal Plants/Bawang.jpg',
              description: ' 	Garlic.  	A low herb and grows up to 60cm high.	Leaves are flat and linear. '+
              'Bulbs consist of several tubers',
              use:'For hypertension. Toothache. Lowers cholesterol levels in the blood',
              preparation:'May be fried, roasted, soaked in vinegar for 30 minutes, or blanched in boilde water for 5 minutes. Take two pieces three times a day after meals.'+
              'For toothache, pound a small piece and apply to affected part.',
            },
            {
              plants: 'bayabas',
              name: 'BAYABAS',
              sname:'Psidium guajava',
              images:'assets/Herbal Plants/Bayabas.jpg',
              description: 'Guava.  	A tree about 4 to 5 meters high with tiny white flowers with round or oval fruits that are eaten raw.',
              use:'For washing wounds. For toothache. For diarrhea',
              preparation:'Warm decoction is used for gargle. 	Freshly pounded leaves are used for toothache. Guava leaves are to be washed well and chopped. Boil for 15 minutes at low fire. Do not cover pot.'+
              ' Cool and strain before use.',
            },
            {
              plants: 'Lagundi',
              name: 'LAGUNDI',
              sname:'Vitex Negundo',
              images:'assets/Herbal Plants/Lagundi.jpg',
              description: '5 Leaved-Chaste Tree. A shrub growing wild in vacant lots and waste land.Matured branches are planted.'+
              'The flowers are blue and bell-shaped. The small fruits turn black when ripe. It is better to collect the leaves when are in bloom.',
              use:'Asthma and cough. Fever, Dysentery, Colds & Pain. Skin disease and wounds. Headache. Rheumatism, sprain, contusions, insect bites.'+
              'Aromatic bath for sick patients',
              preparation:' 	For Asthma, cough and fever boil chopped raw fruits or leaves in 2 glasses of water left for 15 minutes until the water left in only 1 glass (decoction). Strain.'+
              ' For Dysentery, colds and pain, boil a handful of leaves and flowers in water to produce a glass full of decoction 3 times a day.'+
              ' For skin diseases (dermatitis, scabies, ulcer, eczema) and wound, prepare a decoction of the leaves. Wash and clean the skin/wound with decoction.'+
              ' For headache, crushed leaves may be applied on the forehead.'+
              ' 	For rheumatism, sprain, contusions and insect bites, pound the leaves apply on affected part. ',
            },
            {
              plants: 'niyug-niyugan',
              name: 'NIYUG-NIYUGAN',
              sname:'Quisqualis Indica L.',
              images:'assets/Herbal Plants/Niyug-niyugan.jpg',
              description: 'Chinese Honey suckles. A vine which bears tiny fruits and grows wild in backyards.'+
              'The seeds must come from mature, dried but newly opened fruits. Propagated through stem cuttings about 20cm in height.',
              use:'Anti-helminthic (used to expel parasitic worms.)',
              preparation:'Seeds of niyug-niyugan are eaten raw two hours before the patient’s last metal of the day.'+
              'Adults may take 10 seeds; children 4 to 7 years of age may eat up to four seeds only;'+
              'ages 8 to 9 may take six seeds and seven seen may be eaten by children 10 to 12 years old.',
            },
            {
              plants: 'sambong',
              name: 'SAMBONG',
              sname:': Blumea Balsamifera',
              images:'assets/Herbal Plants/Sambong.jpg',
              description: 'A plant that reaches 1 ½ to 3 meters in height with rough hairy leaves.'+
              'Young plants around mother plant may be separated when their have three or more leaves.',
              use:'Anti-dema. Diuretic. Anti-urolithiasis',
              preparation:'Boil chopped leaves in water for 15 minutes until one glass remains. Cool and strain.'+
              'Divide Decoction into 3 parts. Drink one part 3 times a day.'+
              '',
            },
            {
              plants: 'tsaang_gubat',
              name: 'TSAANG GUBAT',
              sname:'Carmona Retusa',
              images:'assets/Herbal Plants/Tsaang Gubat.jpg',
              description: 'Forest or wild tea. A shrub with small, shiny nice-looking leaves that grows in wild uncultivated areas and forests.',
              use:'Diarrhea. Stomach ache',
              preparation:'Boil the following number of chopped leaves in 2 glasses of water for 15 minutes or until amount of water goes down to 1 glass. Cool and strain.'+
              'Wash leaves and chop. Boil chopped leaves in 1 glass of water for 15 minutes. Cool and filter/strain and drink.',
            },
            {
              plants: 'Ulisimang_bato',
              name: 'ULISIMANG BATO',
              sname:'Peperomia Pellucida',
              images:'assets/Herbal Plants/Ulisimang bato.jpg',
              description: 'Silver bush or Shiny bush. Pansit-panistan'+
              'A weed with heart shaped leaves that grow in shady parts of the garden and yard.',
              use:'Lower uric acid (Rheumatism and Gout)',
              preparation:'Wash the leaves well. One and a half cup leaves are boiled in two glassfuls of water over low fire. Do not cover pot. Cool and strain. Divide into three parts and drink each part 3 times a day.'+
              'May also be eaten as salad. Wash the leaves well. Prepare one and a half cups of leaves (not closely packed). Divide into three parts and take as salad 3 times a day.',
            },
            {
                plants: 'yerba_buena',
                name: 'YERBA BUENA',
                sname:': Mentha Cordifelia',
                images:'assets/Herbal Plants/Yerba Buena.jpg',
                description: 'Peppermint. A small multi-branching aromatic herb. The leaves are small, elliptical and with toothed margin.'+
                'The stem creeps to help ground and develop roots.',
                use:'For pain different parts of the body as head ache, stomach ache. Rheumatism, arthritis and headache'+
                'Cough and cold. Swollen gums & toothache. Menstrual and gas pain. Nausea and fainting. Insect Bites Pruritus',
                preparation:'For pain in diff. parts of the body, boil chopped leaves in 2 glasses of water for 15 minutes. Cool and strain.'+
                'For rheumatism, arthritis, and headache, crush the fresh leaves and squeeze sap. Massage sap on painful parts with eucalyptus.'+
                'For Menstrual pain and gas pain, soak a handful of leaves in a glass of boiling water. Drink infusion. It induces menstrual flow and sweating.'+
                'For nausea and fainting, crush leaves and apply at nostrils of patient.'+
                'For insect bites, crush leaves and apply juice on affected part or pound leaves until paste-like and rub this on the affected part.',
            }   
        ];
    }
    
    getHerbals(plants: string): Herbal {
        return this.getHerbal().find((herbal) => herbal.plants == plants);
    }
}

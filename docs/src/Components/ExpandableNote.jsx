import React from "react";
import { motion } from "framer-motion";
import { AiOutlineCloseSquare } from "react-icons/ai";
import Card from "./Card";

function ExpandableNote({ onClose }) {
  return (
    
    <motion.div 
      className="z-20 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >{/* framer animation for the modal*/}
    {/* main white box*/}
      <div className="relative w-[60vw] h-[65vh] bg-zinc-300 rounded-[50px] overflow-hidden">
        {/* the grey overshadow on title*/}
        <div className="flex h-24 w-full justify-between bg-emerald-700/20 ">
        {/* Title*/}
          <h1 className=" px-6 py-6 text-5xl ">Title</h1>
          
        </div>
        {/* paragraph with the scroll feature*/}
        <div className="h-full overflow-y-auto hide-scrollbar">
          <p className="p-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nulla
            tempora non laborum sunt. Sit vero numquam natus, dolore ullam,
            saepe minus, eius vel expedita nisi eveniet exercitationem quaerat
            quisquam odit voluptate iure perspiciatis rerum? Quos aperiam
            eveniet corrupti ullam ut. Cum, assumenda dolores, corporis aliquam
            impedit unde nesciunt, maxime ipsa adipisci ratione quae natus.
            Accusamus fuga placeat nisi harum ipsam vitae, recusandae
            consequatur doloribus pariatur possimus ducimus! Nemo neque
            asperiores ut? Possimus eos corporis distinctio dolor repellat
            quibusdam cupiditate? Deleniti aliquid quae voluptatum sint
            similique suscipit labore porro magni laborum deserunt qui dolores
            explicabo, molestiae, voluptates maxime laboriosam ipsam, quibusdam
            nihil necessitatibus numquam quis provident. Suscipit expedita rem
            cupiditate hic voluptatibus. Asperiores neque illo molestias
            recusandae eveniet reprehenderit? Sapiente, harum cum. Fuga,
            recusandae dolorum. Ex ipsum est nobis impedit doloremque qui alias
            eos illum veniam. Laboriosam culpa sit in modi incidunt temporibus
            perferendis illo ex provident delectus, iusto nesciunt, quaerat
            eaque asperiores beatae. Quae reiciendis a inventore beatae? Velit
            placeat quos perferendis vel accusamus fugit architecto labore
            assumenda ullam blanditiis tempore aliquid quo voluptate expedita
            inventore sit maiores iste molestias libero adipisci praesentium
            vero qui, laudantium quis? Sapiente rem officiis nihil nam repellat
            ratione quo dicta doloremque optio ullam enim quas beatae quia dolor
            perspiciatis illum provident illo delectus accusamus incidunt
            adipisci, alias fugiat consequuntur? Maiores, nisi. Molestias
            ratione in sed dolores, laboriosam, sint aut facilis, quae
            voluptates praesentium ipsum amet incidunt tempore quas quis
            repellendus a? Quam eius saepe, aliquid explicabo magnam modi ipsam
            molestiae veniam! Soluta ea impedit odit sed aut repellendus
            numquam. Harum error est eligendi officia dolor. Dignissimos
            accusamus ipsum architecto corporis ad eaque ex asperiores pariatur
            perspiciatis sit. Reiciendis mollitia, quidem iure quisquam quas
            repellat doloribus dignissimos vitae nihil quos commodi ex fugiat
            assumenda modi perspiciatis magnam numquam voluptates veritatis
            error sapiente. Deleniti, nulla reprehenderit amet atque quasi
            consequuntur voluptatum ipsa quisquam laborum perferendis sint vel?
            Mollitia ratione voluptate, iusto delectus, iste consequuntur
            quisquam omnis repudiandae iure officia doloremque natus dignissimos
            error facilis eum provident fugit. Nobis deleniti excepturi ea
            dolorum facere, fugit rerum consequatur, dolor exercitationem qui ut
            adipisci magni? Atque nisi commodi nostrum dignissimos tempore
            maiores. Minus, ipsam fuga magnam, blanditiis id ea culpa est illum
            incidunt voluptas vel soluta aperiam quae ab amet accusantium,
            necessitatibus autem. Iure beatae expedita quod nisi commodi nam,
            vel reiciendis aperiam quisquam consequatur quas molestiae repellat,
            illum omnis veniam deleniti excepturi similique recusandae quam
            debitis modi nemo dignissimos voluptates? Aut blanditiis dignissimos
            necessitatibus unde, ex repellendus, earum aliquid recusandae vitae
            alias maiores aperiam itaque quisquam! Nostrum doloremque molestiae
            cumque autem ea enim tempore asperiores distinctio velit deleniti.
            Tempora beatae at mollitia quibusdam ipsum ex odit minus iusto
            necessitatibus corrupti. Ullam repellat quaerat magnam asperiores
            ea? Sed illum minus totam odit placeat eius excepturi sit nesciunt
            reiciendis ullam, adipisci nulla natus. Architecto non officia
            similique reprehenderit magnam sit cumque omnis id sapiente hic
            laboriosam ducimus repudiandae dolor nihil quibusdam molestiae,
            aliquam doloremque voluptate quisquam neque ullam distinctio.
            Corporis repellat nesciunt ipsam soluta officia officiis natus atque
            autem libero, omnis nobis consequatur aliquam voluptas esse
            provident non, nemo incidunt eius dicta velit iste voluptates
            veniam. Officiis, quaerat? Facere dicta doloremque dignissimos odio
            in, optio quidem rem deleniti molestias. Laudantium perferendis
            tempora veritatis quam non quis error, a aspernatur reiciendis dolor
            in suscipit ab officia possimus accusamus. Tempora eligendi
            recusandae laborum voluptatem doloremque, quas beatae id temporibus
            unde at non corrupti. Adipisci nemo explicabo eligendi aut eum
            perspiciatis repudiandae ab quam beatae? Veniam architecto,
            exercitationem aut id consequuntur optio placeat fuga quidem ullam
            quasi. Magnam numquam eius aut illo iusto enim sunt inventore
            temporibus, qui aliquam excepturi architecto sapiente culpa repellat
            corporis repudiandae minima optio voluptatibus voluptatem quis at
            aliquid dicta? Id numquam neque illum consectetur a dignissimos,
            soluta ea earum ut ipsum quibusdam assumenda vel corporis eius in,
            molestias eveniet molestiae recusandae aliquid repellat sit. Debitis
            repudiandae harum, ullam perspiciatis ipsum iure magnam reiciendis
            dignissimos voluptates corporis ipsa nisi blanditiis sapiente
            aliquid asperiores labore facere doloremque, eveniet saepe
            provident? Dolore, eos voluptas. Deserunt, mollitia molestias alias
            adipisci esse quis eius amet minima a illum blanditiis saepe
            perspiciatis totam. Nemo optio aspernatur soluta accusantium.
            Asperiores qui nobis nihil, quo mollitia eaque dicta necessitatibus
            odio est veniam eveniet, ea nesciunt explicabo recusandae saepe
            sequi labore aut ut debitis! Assumenda eum alias labore aliquid.
            Impedit hic in cupiditate architecto minus natus inventore eius eum
            facere consequatur quod et aliquam aperiam, quaerat recusandae
            aliquid. Facere voluptatum reiciendis voluptatem inventore, optio
            temporibus expedita, quisquam nemo sunt fugit consequatur nihil
            neque commodi magnam culpa qui quaerat fugiat, maxime saepe. Magnam
            aliquid, sint omnis pariatur quam earum eaque odit minima officiis
            consequuntur at enim temporibus nemo cumque! Cupiditate autem
            deserunt ratione ab dolorum velit cum debitis omnis consequatur
            praesentium. Et fugiat est laboriosam cupiditate assumenda autem
            dolor tempore hic nesciunt libero facilis dicta fuga excepturi
            maiores, consequatur impedit voluptate, soluta quo exercitationem
            quibusdam, earum blanditiis eligendi esse accusamus. Asperiores quod
            reprehenderit repudiandae voluptate. Sit corrupti aliquid ducimus
            officia, quod ad, cum nam explicabo voluptates a dignissimos
            quibusdam accusamus soluta quidem odio beatae et tempore facilis
            repellat dolore inventore! Aliquam, neque rem nemo mollitia
            molestias reprehenderit consectetur tempora modi dolores maiores
            incidunt ex saepe voluptate. Expedita architecto maxime nobis nihil.
            Reiciendis sapiente vitae necessitatibus id optio impedit aut
            ducimus distinctio vero. Asperiores pariatur numquam rem fuga nihil,
            est necessitatibus expedita totam. Consectetur laudantium
            necessitatibus eaque atque quaerat nihil dolorum saepe et beatae
            dolores, optio, veniam fugiat, autem voluptates nisi doloribus esse?
            Officia quod ullam soluta impedit quibusdam atque amet possimus
            accusantium, earum temporibus saepe. Beatae facilis magnam veniam
            corporis repellendus voluptatibus aliquid debitis fugiat perferendis
            neque voluptates veritatis non, ipsam vero ipsum vitae suscipit cum
            nulla deserunt enim ullam! Iure nam quam fuga reprehenderit,
            architecto mollitia exercitationem eaque aspernatur quia ut atque
            doloremque asperiores, dolore vel! Corrupti numquam doloribus
            cupiditate reiciendis ipsum necessitatibus corporis. Quae nobis,
            quidem rerum nulla laudantium molestiae tempora illo eos voluptate
            placeat doloribus neque incidunt perspiciatis earum labore minus.
            Facilis, voluptate illo, consequuntur non culpa asperiores sed eius
            nemo nobis libero distinctio. ipsum dolor sit amet consectetur
            adipisicing elit. Architecto reprehenderit dignissimos soluta.
            Distinctio deleniti blanditiis nemo dolores aliquam facere nulla
            repellat fugiat illum eaque labore placeat, nam eum. Beatae quis
            dolores, assumenda porro, magni sunt similique quaerat tempora rerum
            minima omnis aperiam aut enim. Quaerat id hic nihil quam quidem.
          </p>
        </div>
      </div>
      {/*button to close but it dont work now */}
      {/*<motion.button
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 0.8 }}
        onClick={onClose}
        className="px-[500px]"
      >
        <AiOutlineCloseSquare />
      </motion.button> */}
      
    </motion.div>
  );
}

export default ExpandableNote;

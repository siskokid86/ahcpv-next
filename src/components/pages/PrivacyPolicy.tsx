"use client";

import HeaderV2 from "@/components/v2/HeaderV2";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeaderV2 minimal />

      <main className="container mx-auto max-w-3xl px-6 pb-16 pt-8">
        <h1 className="mb-8 text-3xl font-bold text-foreground">Politique de confidentialité</h1>

        <div className="space-y-8 text-foreground/90">
          <section>
            <h2 className="mb-4 text-xl font-bold text-foreground">Qui sommes-nous</h2>
            <p className="text-sm text-muted-foreground">Le présent site est édité par <strong className="text-foreground">Amélioration Habitat Conseil</strong>.</p>
          </section>

          <hr className="border-border" />

          <section>
            <h2 className="mb-4 text-xl font-bold text-foreground">Collecte de données via les commentaires</h2>
            <p className="text-sm text-muted-foreground">Lorsque vous laissez un commentaire sur notre site, nous recueillons les informations saisies dans le formulaire correspondant, ainsi que l&apos;adresse IP et l&apos;empreinte technique de votre navigateur (user-agent). Ces données permettent notamment de lutter contre les spams.</p>
            <p className="mt-2 text-sm text-muted-foreground">Une version anonymisée de votre adresse e-mail (hash) peut être transmise au service Gravatar afin de vérifier si vous utilisez ce service. Une fois le commentaire validé, votre photo de profil sera publique à côté de votre message.</p>
          </section>

          <hr className="border-border" />

          <section>
            <h2 className="mb-4 text-xl font-bold text-foreground">Médias</h2>
            <p className="text-sm text-muted-foreground">Si vous importez des images sur notre site, nous vous recommandons de supprimer les données EXIF (y compris GPS). En effet, ces métadonnées peuvent être extraites par d&apos;autres visiteurs et révéler des informations de localisation.</p>
          </section>

          <hr className="border-border" />

          <section>
            <h2 className="mb-4 text-xl font-bold text-foreground">Cookies</h2>
            <p className="mb-2 text-sm text-muted-foreground">Notre site utilise des cookies afin d&apos;améliorer l&apos;expérience utilisateur.</p>
            <ul className="list-disc space-y-2 pl-6 text-sm text-muted-foreground">
              <li>Si vous laissez un commentaire, vous pouvez choisir de sauvegarder votre nom, e-mail et site web dans des cookies. Ces cookies expirent au bout d&apos;un an.</li>
              <li>Lors de votre connexion, des cookies temporaires sont créés pour vérifier l&apos;acceptation des cookies par votre navigateur. Ces cookies sont supprimés dès la fermeture du navigateur.</li>
              <li>Des cookies de session et de préférences (affichage, langue, etc.) peuvent être installés et durer de 2 jours à 1 an selon les cas.</li>
              <li>Si vous cochez « Se souvenir de moi », votre session sera maintenue pendant 2 semaines.</li>
              <li>Un cookie spécifique est généré lorsque vous modifiez ou publiez un contenu, afin d&apos;indiquer l&apos;ID de l&apos;article concerné. Ce cookie expire après 24 heures.</li>
            </ul>
          </section>

          <hr className="border-border" />

          <section>
            <h2 className="mb-4 text-xl font-bold text-foreground">Contenu embarqué depuis d&apos;autres sites</h2>
            <p className="text-sm text-muted-foreground">Certains articles peuvent inclure des contenus intégrés (vidéos, images, articles externes, etc.). Ces contenus se comportent comme si vous consultiez directement les sites tiers, lesquels peuvent collecter vos données, utiliser des cookies ou activer des dispositifs de suivi tiers.</p>
          </section>

          <hr className="border-border" />

          <section>
            <h2 className="mb-4 text-xl font-bold text-foreground">Partage de vos données</h2>
            <p className="text-sm text-muted-foreground">En cas de demande de réinitialisation de mot de passe, votre adresse IP sera incluse dans l&apos;e-mail automatique de réinitialisation.</p>
          </section>

          <hr className="border-border" />

          <section>
            <h2 className="mb-4 text-xl font-bold text-foreground">Durée de conservation des données</h2>
            <ul className="list-disc space-y-2 pl-6 text-sm text-muted-foreground">
              <li>Les commentaires et leurs métadonnées sont conservés de manière illimitée, afin de reconnaître et valider automatiquement les futurs commentaires.</li>
              <li>Les comptes utilisateurs conservent les informations saisies dans le profil. Celles-ci peuvent être consultées, modifiées ou supprimées par l&apos;utilisateur à tout moment, à l&apos;exception du nom d&apos;utilisateur.</li>
            </ul>
          </section>

          <hr className="border-border" />

          <section>
            <h2 className="mb-4 text-xl font-bold text-foreground">Vos droits sur vos données</h2>
            <p className="mb-2 text-sm text-muted-foreground">Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="mb-4 list-disc space-y-1 pl-6 text-sm text-muted-foreground">
              <li><strong className="text-foreground">Accès</strong> : obtenir une copie des données personnelles que nous détenons à votre sujet.</li>
              <li><strong className="text-foreground">Rectification</strong> : corriger vos informations si elles sont inexactes ou incomplètes.</li>
              <li><strong className="text-foreground">Suppression</strong> : demander l&apos;effacement de vos données personnelles.</li>
              <li><strong className="text-foreground">Portabilité</strong> : recevoir vos données dans un format structuré et exploitable.</li>
              <li><strong className="text-foreground">Opposition</strong> : refuser certains traitements de vos données, notamment ceux liés à la prospection commerciale.</li>
            </ul>
            <p className="mb-2 text-sm text-muted-foreground">Pour exercer vos droits, adressez une demande écrite à : <strong className="text-foreground">Amélioration Habitat Conseil – 9 avenue du Général Leclerc, 31340 Villemur-sur-Tarn</strong> (accompagnée d&apos;une copie d&apos;une pièce d&apos;identité).</p>
            <p className="text-sm text-muted-foreground">Vous pouvez également saisir la <strong className="text-foreground">CNIL</strong> via <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.cnil.fr</a> en cas de litige.</p>
          </section>

          <hr className="border-border" />

          <section>
            <h2 className="mb-4 text-xl font-bold text-foreground">Transmission des données</h2>
            <p className="text-sm text-muted-foreground">Les commentaires peuvent être analysés par un service automatique de détection de spam.</p>
          </section>
        </div>
      </main>

      <footer className="border-t border-border px-6 py-6 text-center text-sm text-muted-foreground">
        Amélioration Habitat Conseil – 9 avenue du général LECLERC 31340 VILLEMUR SUR TARN – 752 494 419 R.C.S. Toulouse –{" "}
        <Link href="/mentions-legales" className="text-primary hover:underline">Mentions légales</Link>{" "}–{" "}
        <Link href="/privacy-policy" className="text-primary hover:underline">Politique de confidentialité</Link>.
      </footer>
    </div>
  );
};

export default PrivacyPolicy;

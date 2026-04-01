"use client";

import HeaderV2 from "@/components/v2/HeaderV2";
import Link from "next/link";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeaderV2 minimal />

      <main className="container mx-auto max-w-3xl px-6 pb-16 pt-8">
        <h1 className="mb-8 text-3xl font-bold text-foreground">Mentions légales</h1>

        <div className="prose-custom space-y-8 text-foreground/90">
          <section>
            <h2 className="mb-4 text-xl font-bold text-foreground">Définitions</h2>
            <ul className="list-disc space-y-2 pl-6 text-sm text-muted-foreground">
              <li><strong className="text-foreground">Client</strong> : toute personne physique majeure capable au sens du Code civil (articles 1123 et suivants) ou toute personne morale visitant le Site et utilisant les services proposés.</li>
              <li><strong className="text-foreground">Prestations et Services</strong> : l&apos;ensemble des contenus et fonctionnalités mis à disposition par le site amelioration-habitat-conseil.fr.</li>
              <li><strong className="text-foreground">Contenu</strong> : tous les éléments présents sur le Site (textes, images, vidéos, graphismes, icônes, logos, etc.).</li>
              <li><strong className="text-foreground">Informations Clients</strong> : données personnelles susceptibles d&apos;être collectées et traitées dans le cadre de la gestion des comptes, de la relation client, ainsi qu&apos;à des fins d&apos;analyses et de statistiques.</li>
              <li><strong className="text-foreground">Utilisateur</strong> : toute personne accédant et naviguant sur le Site.</li>
              <li><strong className="text-foreground">Informations personnelles</strong> : toutes les données permettant, directement ou indirectement, d&apos;identifier une personne physique (au sens de la loi n° 78-17 du 6 janvier 1978 et du RGPD n°2016-679).</li>
            </ul>
          </section>

          <hr className="border-border" />

          <section>
            <h2 className="mb-4 text-xl font-bold text-foreground">1. Présentation du site</h2>
            <p className="mb-4 text-sm text-muted-foreground">Conformément à l&apos;article 6 de la loi n°2004-575 du 21 juin 2004 pour la confiance dans l&apos;économie numérique :</p>
            <ul className="list-disc space-y-2 pl-6 text-sm text-muted-foreground">
              <li><strong className="text-foreground">Propriétaire</strong> : Amélioration Habitat Conseil – 9 avenue du Général Leclerc, 31340 Villemur-sur-Tarn</li>
              <li><strong className="text-foreground">Responsable de la publication</strong> : Patrick Perrotet</li>
              <li><strong className="text-foreground">Agence web et communication</strong> : IOQUERY</li>
              <li><strong className="text-foreground">Hébergeur</strong> : O2Switch – Chemin des Pardiaux, 63000 Clermont-Ferrand – France</li>
            </ul>
          </section>

          <hr className="border-border" />

          <section>
            <h2 className="mb-4 text-xl font-bold text-foreground">2. Conditions générales d&apos;utilisation</h2>
            <p className="text-sm text-muted-foreground">Le présent Site est une création intellectuelle protégée par le Code de la propriété intellectuelle et la réglementation internationale. Toute utilisation vaut acceptation pleine et entière des présentes conditions générales d&apos;utilisation, susceptibles d&apos;évoluer à tout moment. Le Site est accessible en continu, sauf interruption pour maintenance technique ou mise à jour.</p>
          </section>

          <hr className="border-border" />

          <section>
            <h2 className="mb-4 text-xl font-bold text-foreground">3. Objet du site</h2>
            <p className="text-sm text-muted-foreground">Le Site a pour vocation d&apos;informer les Utilisateurs sur les activités et services de la société Amélioration Habitat Conseil. Les informations publiées sont fournies à titre indicatif et sont régulièrement mises à jour, sans garantie d&apos;exhaustivité ni d&apos;exactitude absolue.</p>
          </section>

          <hr className="border-border" />

          <section>
            <h2 className="mb-4 text-xl font-bold text-foreground">4. Limitations techniques</h2>
            <p className="text-sm text-muted-foreground">Le Site fonctionne avec les technologies web usuelles, dont JavaScript. L&apos;Utilisateur s&apos;engage à naviguer avec un matériel récent, protégé et mis à jour. Le site est hébergé dans l&apos;Union européenne chez O2Switch, garantissant la conformité avec le RGPD.</p>
          </section>

          <hr className="border-border" />

          <section>
            <h2 className="mb-4 text-xl font-bold text-foreground">5. Propriété intellectuelle</h2>
            <p className="text-sm text-muted-foreground">Tous les éléments du Site (textes, visuels, logos, graphismes, vidéos, icônes, etc.) sont protégés par le droit d&apos;auteur. Toute reproduction, modification ou exploitation non autorisée, totale ou partielle, est strictement interdite et pourra donner lieu à des poursuites judiciaires.</p>
          </section>

          <hr className="border-border" />

          <section>
            <h2 className="mb-4 text-xl font-bold text-foreground">6. Responsabilité</h2>
            <p className="mb-2 text-sm text-muted-foreground">Le site s&apos;efforce de garantir une information fiable et une accessibilité optimale. Cependant, il ne pourra être tenu responsable de :</p>
            <ul className="list-disc space-y-1 pl-6 text-sm text-muted-foreground">
              <li>dommages matériels liés à l&apos;utilisation du Site,</li>
              <li>erreurs, omissions ou inexactitudes dans le contenu,</li>
              <li>interruptions ou dysfonctionnements liés au réseau Internet.</li>
            </ul>
          </section>

          <hr className="border-border" />

          <section>
            <h2 className="mb-4 text-xl font-bold text-foreground">7. Données personnelles</h2>

            <h3 className="mb-2 text-lg font-semibold text-foreground">7.1 Responsable du traitement</h3>
            <p className="mb-4 text-sm text-muted-foreground">Le responsable de traitement est Amélioration Habitat Conseil, représenté par Patrick Perrotet.</p>

            <h3 className="mb-2 text-lg font-semibold text-foreground">7.2 Finalités</h3>
            <ul className="mb-4 list-disc space-y-1 pl-6 text-sm text-muted-foreground">
              <li>assurer le bon fonctionnement du Site et la gestion de la relation client,</li>
              <li>réaliser des analyses statistiques,</li>
              <li>améliorer l&apos;expérience utilisateur,</li>
              <li>prévenir la fraude et les abus,</li>
              <li>mener des campagnes d&apos;information et de communication (emails, SMS).</li>
            </ul>
            <p className="mb-4 text-sm text-muted-foreground">Aucune donnée n&apos;est commercialisée.</p>

            <h3 className="mb-2 text-lg font-semibold text-foreground">7.3 Droits des Utilisateurs</h3>
            <p className="mb-2 text-sm text-muted-foreground">Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="mb-4 list-disc space-y-1 pl-6 text-sm text-muted-foreground">
              <li>droit d&apos;accès, rectification et suppression,</li>
              <li>droit d&apos;opposition et de limitation,</li>
              <li>droit à la portabilité,</li>
              <li>droit de définir le sort de vos données après décès.</li>
            </ul>
            <p className="mb-4 text-sm text-muted-foreground">Toute demande doit être adressée par écrit, avec justificatif d&apos;identité, à : <strong className="text-foreground">Amélioration Habitat Conseil – 9 avenue du Général Leclerc, 31340 Villemur-sur-Tarn</strong>.</p>
            <p className="mb-4 text-sm text-muted-foreground">Vous pouvez également saisir la CNIL via <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.cnil.fr</a>.</p>

            <h3 className="mb-2 text-lg font-semibold text-foreground">7.4 Confidentialité et sécurité</h3>
            <p className="text-sm text-muted-foreground">Les données sont hébergées exclusivement dans l&apos;Union européenne. Amélioration Habitat Conseil et ses prestataires mettent en œuvre toutes les mesures nécessaires pour garantir leur confidentialité et leur intégrité.</p>
          </section>

          <hr className="border-border" />

          <section>
            <h2 className="mb-4 text-xl font-bold text-foreground">8. Cookies et traceurs</h2>
            <p className="text-sm text-muted-foreground">Le Site utilise des cookies destinés à améliorer la navigation et à mesurer l&apos;audience. L&apos;Utilisateur peut refuser ou paramétrer le dépôt de cookies via son navigateur. Certaines fonctionnalités peuvent être limitées en cas de refus.</p>
          </section>

          <hr className="border-border" />

          <section>
            <h2 className="mb-4 text-xl font-bold text-foreground">9. Liens externes</h2>
            <p className="text-sm text-muted-foreground">Des liens vers d&apos;autres sites internet peuvent être proposés. Amélioration Habitat Conseil n&apos;exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.</p>
          </section>

          <hr className="border-border" />

          <section>
            <h2 className="mb-4 text-xl font-bold text-foreground">10. Droit applicable et juridiction compétente</h2>
            <p className="text-sm text-muted-foreground">Tout litige relatif au présent Site est régi par le droit français.</p>
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

export default MentionsLegales;

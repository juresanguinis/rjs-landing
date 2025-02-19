import { IFAQs } from "@/types/faq.interface";

export const FAQ: IFAQs[] = [
  {
    category: "Eligibility",
    questions: [
      {
        question: "I have Italian DNA, does that count?",
        answer:
          "No. Jure sanguinis is a legal process that requires an official paper trail of vital records (births, marriages, deaths) demonstrating the lineage from your original Italian ancestor to you.",
      },
      {
        question:
          "I have a parent/grandparent/great-grandparent that was born in Italy, does that mean I qualify?",
        answer:
          "Not necessarily. You will have to prove the unbroken line of citizenship transmission from your LIBRA to you.",
      },
      {
        question: "Can I get an Italian passport?",
        answer:
          "Not as your first step. You need to go through the process of having your citizenship be recognized by an Italian authority first.",
      },
      {
        question: "My grandparent fought in the war, is my line cut?",
        answer:
          "Only if they naturalized as part of this before the birth of the next person in line (see: WWI expedited naturalizations). Fighting in the military isn't a disqualifying event.",
      },
      {
        question:
          "My ancestor naturalized, and I see in the oath that they renounced citizenship. Does this make me ineligible?",
        answer:
          "No, Italian authorities only considered renunciations that happened in front of them. Oaths to foreign states as part of naturalization don't count as Italian renunciation; merely as a loss of Italian citizenship.",
      },
    ],
  },
  {
    category: "Responsibilities and Effects on Current Citizenship",
    questions: [
      {
        question: "Will I have to pay taxes to Italy?",
        answer:
          "Only if you reside there and become a tax resident by living there for more than 182 days in a calendar year. Italy does not tax Italians residing abroad.",
      },
      {
        question: "Will I be subject to the draft?",
        answer: "No. Italy ended the draft in 2006.",
      },
      {
        question: "Will I have to give up my current citizenship?",
        answer:
          "Not in the United States and not for most countries. Additionally, Italy’s denunciation of the 1963 Strasbourg Convention means that, as from June 4, 2010, Italian citizenship is no longer automatically lost by the Italians who become naturalised citizens of the countries that are signatories to the Convention (following the denunciation of the Convention by Sweden, Germany, Belgium, France and Luxembourg, the current signatories are Austria, Denmark, Norway and the Netherlands).",
      },
    ],
  },
  {
    category: "Documents",
    questions: [
      {
        question:
          "How do you request a birth, marriage, or death record from Italy?",
        answer:
          "Go to the Documents from Italy page in the wiki.",
      },
      {
        question:
          "Will the consulate accept a printout of an Italian record?",
        answer:
          "This depends on the consulate, some will accept a printout while others want the wet signature. If your consulate accepts printouts, make sure to also include a printout of the email from the comune that the record was attached to.",
      },
      {
        question:
          "I have some name and date discrepancies, will the consulate accept those?",
        answer:
          "There has been a push at the consulates recently to become more strict on even minor discrepancies. Read through the fixing discrepancies wiki page to see what you should do.",
      },
    ],
  },
  {
    category: "Appointment Booking",
    questions: [
      {
        question: "Do I have to use a lawyer to file my application?",
        answer:
          "No, in fact, most people do it themselves. Lawyers are mainly used for 1948 and ATQ cases.",
      },
      {
        question: "Which website do I use to book an appointment?",
        answer:
          "The appointment booking website shared by all of the consulates is called Prenot@mi/Prenotami.",
      },
      {
        question:
          "It says that there's no appointments, is anyone else having this issue?",
        answer:
          "We all have this issue. There are a limited number of appointments for extremely high demand, so newly available appointments are released on a schedule determined by each individual consulate. Check our stickied appointment booking masterpost for more information. However, you might get lucky and come across a canceled appointment outside of the scheduled release times, so it wouldn't hurt to check somewhat often.",
      },
      {
        question:
          "Should I email the consulate to ask them about available appointments?",
        answer:
          "NO. LEAVE THE CONSULATES ALONE. They get hundreds of emails every day clogging up their inbox asking about this.",
      },
      {
        question:
          "Prenotami times out/shows just a spinning wheel/gets stuck/etc. Is anyone else having this issue?",
        answer:
          "We all have this issue. This comment explains some of why that is, but essentially, Prenotami can't handle the amount of people trying to access it all at the same time, so it breaks.",
      },
      {
        question:
          "This is annoying, can I just hire someone to book an appointment for me?",
        answer:
          "No, it's illegal and it also violates Prenotami's Terms of Service.",
      },
      {
        question:
          "Can't I just apply at a different consulate that's easier/quicker to get an appointment at?",
        answer:
          "No. You need to apply at the consulate that has jurisdiction over where you live. They ask for proof of residence at your appointment - namely, a drivers license or state ID card and either a utility bill, cell phone bill, bank statement, etc.",
      },
    ],
  },
  {
    category: "Judicial Cases",
    questions: [
      {
        question: "Can I file a 1948 case myself?",
        answer:
          "No. You must use an Italian lawyer, preferably one that specializes in citizenship (not immigration) law and has deep experience in 1948 cases.",
      },
      {
        question: "Can I live in Italy while my 1948 case is underway?",
        answer:
          "Generally speaking, you would not be able to get a permesso di soggiorno in attesa cittadinanza for this. You may qualify for another permesso which would allow you to live in Italy. In general, though, you stay where you are and your Italian lawyer files the case for you.",
      },
      {
        question: "Where would my case be filed?",
        answer:
          "As of June 22, 2022, judicial citizenship cases are heard at one of 26 regional courts. Your case would be filed in the court (Tribunale Ordinario) that has jurisdiction over your ancestral comune. Check out this wiki page for a map and spreadsheet to figure out which court that would be.",
      },
      {
        question: "Do I need to hire a lawyer from the region of my ancestral comune?",
        answer:
          "No, you can hire a lawyer from anywhere in Italy.",
      },
      {
        question: "Who should I hire, then?",
        answer:
          "We have a list of vetted 1948 case lawyers on our service provider wiki page, which also includes a link to a guide for finding your own lawyer.",
      },
      {
        question: "I was told that I could file a judicial case instead of applying at a consulate, is this true?",
        answer:
          "Yes, it is possible to do and is colloquially referred to as an Against the Queue (ATQ) case. However, be aware that these cases carry more risk, and are less forgiving, than consular applications. Additionally, many people are now aware that this option exists and the courts have become about as backed up as the consulates, or even worse.",
      },
    ],
  },
  {
    category: "Miscellaneous",
    questions: [
      {
        question: "What is the minor issue? Am I affected?",
        answer:
          "Check out our announcement on the minor issue here.",
      },
      {
        question: "My Italian citizen ancestor married a woman who was not an Italian citizen, passing Italian citizenship to her. Did she retain the right to pass down Italian citizenship?",
        answer:
          "We are seeing this question pop up a lot especially when the Italian citizen ancestor went on to naturalize, especially when the next in line was still a minor.\n\nThe answer is - it depends. There are a few things you'll have to check.\n\nFirst, did the woman who gained Italian citizenship subsequently naturalize? If so, when?\n\nSecond, was the marriage registered in Italy?\n\nThird, did the woman take any further concrete steps to claim her Italian citizenship - for example, get an Italian passport?\n\nIf the woman who gained Italian citizenship didn't subsequently naturalize before the next in line reached the age of majority, AND the marriage was registered in Italy OR she took steps to claim her Italian citizenship, then your claim is much stronger.\n\nIn any case, it is possible to make the claim as long as the woman did not subsequently naturalize before the next in line reached the age of majority.\n\nWe have only seen a handful of cases like this, and it can go either way. Be prepared for a consulate rejection and be prepared to have to take the claim to Italian court.",
      },
    ],
  },
];

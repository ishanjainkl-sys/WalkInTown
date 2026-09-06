import React from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './../ui/dialog'
import Link from 'next/link';
import { Check, Info, X, } from 'lucide-react';
import { Menus } from '@/components/nav/utils';

const TermsAndConditioBusinessDetailsnDialog = ({isChecked, setIsChecked}) => {

    return (
        <Dialog>
            <DialogTrigger >
                <div className=' flex items-center gap-2' >
                    <input checked={isChecked} onChange={()=> setIsChecked((prev)=> !prev)} type="checkbox" className=" size-4" />
                    <p className=' text-gray-600 text-sm' >Terms and Conditions<span className=' text-primary-red' >*</span></p>
                    <Info size={18} />
                </div>
            </DialogTrigger>
            <DialogContent showCloseButton={true} className="max-w-5xl overflow-y-auto w-full" >
                <DialogHeader className={"flex flex-col space-y-1.5 py-8 items-center text-center sm:text-left"} >
                    <DialogTitle></DialogTitle>
                    <div className=' flex flex-col gap-3' >
                        <p className=' text-3xl font-semibold text-primary-red' >Terms and Conditions</p>
                        <p className=' font-semibold text-lg' >Your Agreement</p>
                        <p className='max-h-[40vh] md:max-h-[65vh] overflow-y-auto' >Welcome to WalkIn Town! By registering as a retailer and using our platform to showcase your store offers to customers, you agree to comply with the following terms and conditions. Please read these carefully before proceeding. If you do not agree with any part of these terms, you should not use our platform.
                            <br></br>
                            <br></br>
                            1. Eligibility
                            <br></br>
                            1.1 You must be a legally registered business to use our platform as a retailer. 1.2 By registering, you represent and warrant that all information provided is accurate, complete, and up to date.
                            <br></br>
                            2. Registration and Account
                            <br></br>
                            2.1 You are responsible for maintaining the confidentiality of your account credentials. 2.2 Any activity conducted under your account is your responsibility. Notify us immediately of unauthorized access or breaches. 2.3 The platform reserves the right to suspend or terminate accounts that violate these terms.
                            <br></br>
                            3. Retailer Responsibilities
                            <br></br>
                            3.1 You agree to provide accurate and lawful information about your store and offers. 3.2 All offers must comply with applicable laws, including but not limited to consumer protection laws, advertising standards, and anti-fraud regulations. 3.3 You must not post misleading, false, or inappropriate content on the platform. 3.4 You are solely responsible for fulfilling the offers you advertise and resolving customer complaints related to them.
                            <br></br>
                            4. FORWARD LOOKING STATEMENTS
                            <br></br>
                            All materials reproduced on this site speak as of the original date of publication or filing. The fact that a document is available on this site does not mean that the information contained in such document has not been modified or superseded by events or by a subsequent document or filing. We have no duty or policy to update any information or statements contained on this site and, therefore, such information or statements should not be relied upon as being current as of the date you access this site.
                            <br></br>
                            5. DISCLAIMER OF WARRANTIES AND LIMITATION OF LIABILITY
                            <br></br>
                            A. THIS SITE MAY CONTAIN INACCURACIES AND TYPOGRAPHICAL ERRORS. WE DOES NOT WARRANT THE ACCURACY OR COMPLETENESS OF THE MATERIALS OR THE RELIABILITY OF ANY ADVICE, OPINION, STATEMENT OR OTHER INFORMATION DISPLAYED OR DISTRIBUTED THROUGH THE SITE. YOU EXPRESSLY UNDERSTAND AND AGREE THAT: (i) YOUR USE OF THE SITE, INCLUDING ANY RELIANCE ON ANY SUCH OPINION, ADVICE, STATEMENT, MEMORANDUM, OR INFORMATION CONTAINED HEREIN, SHALL BE AT YOUR SOLE RISK; (ii) THE SITE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS; (iii) EXCEPT AS EXPRESSLY PROVIDED HEREIN WE DISCLAIM ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, WORKMANLIKE EFFORT, TITLE AND NON-INFRINGEMENT; (iv) WE MAKE NO WARRANTY WITH RESPECT TO THE RESULTS THAT MAY BE OBTAINED FROM THIS SITE, THE PRODUCTS OR SERVICES ADVERTISED OR OFFERED OR MERCHANTS INVOLVED; (v) ANY MATERIAL DOWNLOADED OR OTHERWISE OBTAINED THROUGH THE USE OF THE SITE IS DONE AT YOUR OWN DISCRETION AND RISK; and (vi) YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR FOR ANY LOSS OF DATA THAT RESULTS FROM THE DOWNLOAD OF ANY SUCH MATERIAL.
                            <br></br>
                            B. YOU UNDERSTAND AND AGREE THAT UNDER NO CIRCUMSTANCES, INCLUDING, BUT NOT LIMITED TO, NEGLIGENCE, SHALL WE BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE OR CONSEQUENTIAL DAMAGES THAT RESULT FROM THE USE OF, OR THE INABILITY TO USE, ANY OF OUR SITES OR MATERIALS OR FUNCTIONS ON ANY SUCH SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THE FOREGOING LIMITATIONS SHALL APPLY NOTWITHSTANDING ANY FAILURE OF ESSENTIAL PURPOSE OF ANY LIMITED REMEDY.
                            <br></br>
                            6. EXCLUSIONS AND LIMITATIONS
                            <br></br>
                            SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES OR THE LIMITATION OR EXCLUSION OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES. ACCORDINGLY, OUR LIABILITY IN SUCH JURISDICTION SHALL BE LIMITED TO THE MAXIMUM EXTENT PERMITTED BY LAW.
                            <br></br>
                            7. OUR PROPRIETARY RIGHTS
                            <br></br>
                            This Site and all its Contents are intended solely for personal, non-commercial use. Except as expressly provided, nothing within the Site shall be construed as conferring any license under our or any third party's intellectual property rights, whether by estoppel, implication, waiver, or otherwise. Without limiting the generality of the foregoing, you acknowledge and agree that all content available through and used to operate the Site and its services is protected by copyright, trademark, patent, or other proprietary rights. You agree not to: (a) modify, alter, or deface any of the trademarks, service marks, trade dress (collectively "Trademarks") or other intellectual property made available by us in connection with the Site; (b) hold yourself out as in any way sponsored by, affiliated with, or endorsed by us, or any of our affiliates or service providers; (c) use any of the Trademarks or other content accessible through the Site for any purpose other than the purpose for which we have made it available to you; (d) defame or disparage us, our Trademarks, or any aspect of the Site; and (e) adapt, translate, modify, decompile, disassemble, or reverse engineer the Site or any software or programs used in connection with it or its products and services.
                            <br></br>
                            The framing, mirroring, scraping or data mining of the Site or any of its content in any form and by any method is expressly prohibited.
                            <br></br>
                            8. INDEMNITY
                            <br></br>
                            By using the Site web sites you agree to indemnify us and affiliated entities (collectively "Indemnities") and hold them harmless from any and all claims and expenses, including (without limitation) attorney's fees, arising from your use of the Site web sites, your use of the Products and Services, or your submission of ideas and/or related materials to us or from any person's use of any ID, membership or password you maintain with any portion of the Site, regardless of whether such use is authorized by you.
                            <br></br>
                            9. COPYRIGHT AND TRADEMARK NOTICE
                            <br></br>
                            Except our generated dummy copy, which is free to use for private and commercial use, all other text is copyrighted. generator.lorem-ipsum.info © 2013, all rights reserved
                            <br></br>
                            10. INTELLECTUAL PROPERTY INFRINGEMENT CLAIMS
                            <br></br>
                            It is our policy to respond expeditiously to claims of intellectual property infringement. We will promptly process and investigate notices of alleged infringement and will take appropriate actions under the Digital Millennium Copyright Act ("DMCA") and other applicable intellectual property laws. Notices of claimed infringement should be directed to:
                            generator.lorem-ipsum.info
                            126 Electricov St.
                            <br></br>
                            Kiev, Kiev 04176
                            <br></br>
                            Ukraine
                            <br></br>
                            contact@lorem-ipsum.info
                            <br></br>
                            11. PLACE OF PERFORMANCE
                            <br></br>
                            This Site is controlled, operated and administered by us from our office in Kiev, Ukraine. We make no representation that materials at this site are appropriate or available for use at other locations outside of the Ukraine and access to them from territories where their contents are illegal is prohibited. If you access this Site from a location outside of the Ukraine, you are responsible for compliance with all local laws.
                            <br></br>
                            <br></br>
                            12. GENERAL
                            A. If any provision of these Terms and Conditions is held to be invalid or unenforceable, the provision shall be removed (or interpreted, if possible, in a manner as to be enforceable), and the remaining provisions shall be enforced. Headings are for reference purposes only and in no way define, limit, construe or describe the scope or extent of such section. Our failure to act with respect to a breach by you or others does not waive our right to act with respect to subsequent or similar breaches. These Terms and Conditions set forth the entire understanding and agreement between us with respect to the subject matter contained herein and supersede any other agreement, proposals and communications, written or oral, between our representatives and you with respect to the subject matter hereof, including any terms and conditions on any of customer's documents or purchase orders.
                            B. No Joint Venture, No Derogation of Rights. You agree that no joint venture, partnership, employment, or agency relationship exists between you and us as a result of these Terms and Conditions or your use of the Site. Our performance of these Terms and Conditions is subject to existing laws and legal process, and nothing contained herein is in derogation of our right to comply with governmental, court and law enforcement requests or requirements relating to your use of the Site or information provided to or gathered by us with respect to such use.</p>
                    </div>
                    <div className='flex flex-col md:flex-row w-full items-center gap-4 justify-between' >
                        <div className=' flex items-center space-x-2' >
                            <input checked={isChecked && true} onChange={() => setIsChecked((prev) => !prev)} type='checkbox' className=' size-4' ></input>
                            <p>I confirm that I have read and accept the terms and conditions and privacy policy.</p>
                        </div>
                        <div className=' flex items-center gap-3' >
                            <DialogClose className=' flex items-center gap-2 px-3 py-2 text-primary-red border border-primary-red font-semibold rounded-md' >
                                <p>Reject</p>
                                <X size={20} />
                            </DialogClose>
                            <DialogClose className={`flex items-center gap-2 px-3 py-2 bg-primary-red text-white font-semibold rounded-md ${!isChecked && "bg-primary-red/50 "}`} >
                                <p>Accept</p>
                                <Check size={20} />
                            </DialogClose>
                        </div>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default TermsAndConditioBusinessDetailsnDialog
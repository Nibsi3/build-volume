"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, Plus, Minus, Trash2, ShoppingCart, User, Truck, CreditCard } from "lucide-react";

type OrderItem = {
  id: string;
  productName: string;
  quantity: number;
  notes: string;
};

type FormStep = "products" | "details" | "delivery" | "review";

const steps: { id: FormStep; label: string; icon: React.ElementType }[] = [
  { id: "products", label: "Products", icon: ShoppingCart },
  { id: "details", label: "Your Details", icon: User },
  { id: "delivery", label: "Delivery", icon: Truck },
  { id: "review", label: "Review", icon: CreditCard },
];

export default function OrderFormPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0c0c0c] pt-24" />}>
      <OrderFormInner />
    </Suspense>
  );
}

function OrderFormInner() {
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = useState<FormStep>("products");
  const [items, setItems] = useState<OrderItem[]>([
    { id: "1", productName: "", quantity: 1, notes: "" },
  ]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    vatNumber: "",
    deliveryMethod: "delivery",
    address: "",
    city: "",
    postalCode: "",
    province: "",
    branch: "pretoria",
    additionalNotes: "",
  });

  useEffect(() => {
    const product = searchParams.get("product");
    if (!product) return;

    setItems((prev) => {
      if (prev.length === 0) {
        return [{ id: "1", productName: product, quantity: 1, notes: "" }];
      }
      if (prev[0]?.productName?.trim()) return prev;

      const next = [...prev];
      next[0] = { ...next[0], productName: product };
      return next;
    });
  }, [searchParams]);

  const addItem = () => {
    setItems([
      ...items,
      { id: Date.now().toString(), productName: "", quantity: 1, notes: "" },
    ]);
  };

  const removeItem = (id: string) => {
    if (items.length > 1) {
      setItems(items.filter((item) => item.id !== id));
    }
  };

  const updateItem = (id: string, field: keyof OrderItem, value: string | number) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const updateFormData = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const nextStep = () => {
    const stepIndex = steps.findIndex((s) => s.id === currentStep);
    if (stepIndex < steps.length - 1) {
      setCurrentStep(steps[stepIndex + 1].id);
    }
  };

  const prevStep = () => {
    const stepIndex = steps.findIndex((s) => s.id === currentStep);
    if (stepIndex > 0) {
      setCurrentStep(steps[stepIndex - 1].id);
    }
  };

  const handleSubmit = () => {
    const orderData = {
      items: items.filter((i) => i.productName.trim() !== ""),
      ...formData,
    };
    
    const subject = encodeURIComponent("New Order Request - BuildVolume");
    const body = encodeURIComponent(`
Order Request

PRODUCTS:
${orderData.items.map((i, idx) => `${idx + 1}. ${i.productName} (Qty: ${i.quantity})${i.notes ? ` - Notes: ${i.notes}` : ""}`).join("\n")}

CUSTOMER DETAILS:
Name: ${orderData.firstName} ${orderData.lastName}
Email: ${orderData.email}
Phone: ${orderData.phone}
Company: ${orderData.company || "N/A"}
VAT Number: ${orderData.vatNumber || "N/A"}

DELIVERY:
Method: ${orderData.deliveryMethod === "delivery" ? "Delivery" : "Collection"}
${orderData.deliveryMethod === "delivery" ? `Address: ${orderData.address}, ${orderData.city}, ${orderData.province}, ${orderData.postalCode}` : `Branch: ${orderData.branch}`}

Additional Notes: ${orderData.additionalNotes || "None"}
    `.trim());

    window.location.href = `mailto:info@buildvolume.co.za?subject=${subject}&body=${body}`;
  };

  const currentStepIndex = steps.findIndex((s) => s.id === currentStep);

  return (
    <div className="min-h-screen bg-[#0c0c0c] pt-24">
      {/* Hero */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-[#0c0c0c]" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <span className="text-[#666] text-xs tracking-widest uppercase">Quick & Easy</span>
          <h1 className="text-4xl md:text-5xl font-light text-white mt-4 mb-4">ORDER FORM</h1>
          <p className="text-white/60 text-base max-w-xl mx-auto">
            Tell us what you need and we&apos;ll get back to you with a quote. No account required.
          </p>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="border-y border-white/5 py-6">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <button
                  onClick={() => setCurrentStep(step.id)}
                  className={`flex flex-col items-center gap-2 transition-all ${
                    currentStepIndex >= index ? "text-white" : "text-white/30"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${
                      currentStepIndex >= index
                        ? "border-white bg-white/10"
                        : "border-white/20"
                    }`}
                  >
                    <step.icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] tracking-widest uppercase hidden sm:block">
                    {step.label}
                  </span>
                </button>
                {index < steps.length - 1 && (
                  <div
                    className={`w-12 sm:w-20 h-px mx-2 transition-all ${
                      currentStepIndex > index ? "bg-white" : "bg-white/20"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Content */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Step 1: Products */}
            {currentStep === "products" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-light text-white mb-6">What would you like to order?</h2>
                
                {items.map((item, index) => (
                  <div
                    key={item.id}
                    className="bg-[#1a1a1a] border border-white/5 p-6 space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-white/40 text-xs tracking-widest uppercase">
                        Item {index + 1}
                      </span>
                      {items.length > 1 && (
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-white/40 hover:text-red-400 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>

                    <input
                      type="text"
                      placeholder="Product name or description"
                      value={item.productName}
                      onChange={(e) => updateItem(item.id, "productName", e.target.value)}
                      className="w-full bg-transparent border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:border-white/30 focus:outline-none transition-colors"
                    />

                    <div className="flex items-center gap-4">
                      <span className="text-white/60 text-sm">Quantity:</span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            updateItem(item.id, "quantity", Math.max(1, item.quantity - 1))
                          }
                          className="w-8 h-8 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-12 text-center text-white">{item.quantity}</span>
                        <button
                          onClick={() => updateItem(item.id, "quantity", item.quantity + 1)}
                          className="w-8 h-8 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    <input
                      type="text"
                      placeholder="Special requirements (optional)"
                      value={item.notes}
                      onChange={(e) => updateItem(item.id, "notes", e.target.value)}
                      className="w-full bg-transparent border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:border-white/30 focus:outline-none transition-colors text-sm"
                    />
                  </div>
                ))}

                <button
                  onClick={addItem}
                  className="w-full border border-dashed border-white/20 py-4 text-white/60 hover:text-white hover:border-white/40 transition-colors flex items-center justify-center gap-2 text-sm tracking-widest uppercase"
                >
                  <Plus className="w-4 h-4" /> Add Another Item
                </button>

                <p className="text-white/40 text-xs text-center">
                  Not sure what you need?{" "}
                  <Link href="/shop" className="text-white hover:underline">
                    Browse our catalog
                  </Link>
                </p>
              </div>
            )}

            {/* Step 2: Details */}
            {currentStep === "details" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-light text-white mb-6">Your Details</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name *"
                    value={formData.firstName}
                    onChange={(e) => updateFormData("firstName", e.target.value)}
                    className="bg-transparent border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:border-white/30 focus:outline-none transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Last Name *"
                    value={formData.lastName}
                    onChange={(e) => updateFormData("lastName", e.target.value)}
                    className="bg-transparent border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:border-white/30 focus:outline-none transition-colors"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={(e) => updateFormData("email", e.target.value)}
                  className="w-full bg-transparent border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:border-white/30 focus:outline-none transition-colors"
                />

                <input
                  type="tel"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={(e) => updateFormData("phone", e.target.value)}
                  className="w-full bg-transparent border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:border-white/30 focus:outline-none transition-colors"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Company Name (optional)"
                    value={formData.company}
                    onChange={(e) => updateFormData("company", e.target.value)}
                    className="bg-transparent border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:border-white/30 focus:outline-none transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="VAT Number (optional)"
                    value={formData.vatNumber}
                    onChange={(e) => updateFormData("vatNumber", e.target.value)}
                    className="bg-transparent border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:border-white/30 focus:outline-none transition-colors"
                  />
                </div>
              </div>
            )}

            {/* Step 3: Delivery */}
            {currentStep === "delivery" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-light text-white mb-6">Delivery Method</h2>

                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => updateFormData("deliveryMethod", "delivery")}
                    className={`p-6 border text-left transition-all ${
                      formData.deliveryMethod === "delivery"
                        ? "border-white bg-white/5"
                        : "border-white/10 hover:border-white/30"
                    }`}
                  >
                    <Truck className="w-6 h-6 text-white mb-3" />
                    <div className="text-white font-medium">Delivery</div>
                    <div className="text-white/50 text-sm">Ship to your address</div>
                  </button>

                  <button
                    onClick={() => updateFormData("deliveryMethod", "collection")}
                    className={`p-6 border text-left transition-all ${
                      formData.deliveryMethod === "collection"
                        ? "border-white bg-white/5"
                        : "border-white/10 hover:border-white/30"
                    }`}
                  >
                    <ShoppingCart className="w-6 h-6 text-white mb-3" />
                    <div className="text-white font-medium">Collection</div>
                    <div className="text-white/50 text-sm">Pick up from a branch</div>
                  </button>
                </div>

                {formData.deliveryMethod === "delivery" ? (
                  <div className="space-y-4 mt-6">
                    <input
                      type="text"
                      placeholder="Street Address *"
                      value={formData.address}
                      onChange={(e) => updateFormData("address", e.target.value)}
                      className="w-full bg-transparent border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:border-white/30 focus:outline-none transition-colors"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="City *"
                        value={formData.city}
                        onChange={(e) => updateFormData("city", e.target.value)}
                        className="bg-transparent border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:border-white/30 focus:outline-none transition-colors"
                      />
                      <input
                        type="text"
                        placeholder="Postal Code *"
                        value={formData.postalCode}
                        onChange={(e) => updateFormData("postalCode", e.target.value)}
                        className="bg-transparent border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:border-white/30 focus:outline-none transition-colors"
                      />
                    </div>
                    <select
                      value={formData.province}
                      onChange={(e) => updateFormData("province", e.target.value)}
                      className="w-full bg-[#0c0c0c] border border-white/10 px-4 py-3 text-white focus:border-white/30 focus:outline-none transition-colors"
                    >
                      <option value="">Select Province *</option>
                      <option value="gauteng">Gauteng</option>
                      <option value="western-cape">Western Cape</option>
                      <option value="kwazulu-natal">KwaZulu-Natal</option>
                      <option value="eastern-cape">Eastern Cape</option>
                      <option value="free-state">Free State</option>
                      <option value="limpopo">Limpopo</option>
                      <option value="mpumalanga">Mpumalanga</option>
                      <option value="north-west">North West</option>
                      <option value="northern-cape">Northern Cape</option>
                    </select>
                  </div>
                ) : (
                  <div className="space-y-4 mt-6">
                    <p className="text-white/60 text-sm">Select your preferred collection branch:</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {["pretoria", "sandton", "cape-town"].map((branch) => (
                        <button
                          key={branch}
                          onClick={() => updateFormData("branch", branch)}
                          className={`p-4 border text-center transition-all ${
                            formData.branch === branch
                              ? "border-white bg-white/5"
                              : "border-white/10 hover:border-white/30"
                          }`}
                        >
                          <div className="text-white capitalize">
                            {branch.replace("-", " ")}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <textarea
                  placeholder="Additional notes or special instructions (optional)"
                  value={formData.additionalNotes}
                  onChange={(e) => updateFormData("additionalNotes", e.target.value)}
                  rows={3}
                  className="w-full bg-transparent border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:border-white/30 focus:outline-none transition-colors resize-none mt-6"
                />
              </div>
            )}

            {/* Step 4: Review */}
            {currentStep === "review" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-light text-white mb-6">Review Your Order</h2>

                <div className="bg-[#1a1a1a] border border-white/5 p-6 space-y-4">
                  <h3 className="text-white/40 text-xs tracking-widest uppercase">Products</h3>
                  {items
                    .filter((i) => i.productName.trim() !== "")
                    .map((item, index) => (
                      <div key={item.id} className="flex justify-between text-white">
                        <span>
                          {index + 1}. {item.productName}
                        </span>
                        <span className="text-white/60">x{item.quantity}</span>
                      </div>
                    ))}
                </div>

                <div className="bg-[#1a1a1a] border border-white/5 p-6 space-y-2">
                  <h3 className="text-white/40 text-xs tracking-widest uppercase mb-4">Contact</h3>
                  <div className="text-white">
                    {formData.firstName} {formData.lastName}
                  </div>
                  <div className="text-white/60 text-sm">{formData.email}</div>
                  <div className="text-white/60 text-sm">{formData.phone}</div>
                  {formData.company && (
                    <div className="text-white/60 text-sm">{formData.company}</div>
                  )}
                </div>

                <div className="bg-[#1a1a1a] border border-white/5 p-6 space-y-2">
                  <h3 className="text-white/40 text-xs tracking-widest uppercase mb-4">
                    {formData.deliveryMethod === "delivery" ? "Delivery Address" : "Collection"}
                  </h3>
                  {formData.deliveryMethod === "delivery" ? (
                    <>
                      <div className="text-white">{formData.address}</div>
                      <div className="text-white/60 text-sm">
                        {formData.city}, {formData.province} {formData.postalCode}
                      </div>
                    </>
                  ) : (
                    <div className="text-white capitalize">
                      {formData.branch.replace("-", " ")} Branch
                    </div>
                  )}
                </div>

                <p className="text-white/40 text-xs text-center">
                  By submitting this form, you agree to our{" "}
                  <Link href="/terms" className="text-white hover:underline">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            )}
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-white/5">
            <button
              onClick={prevStep}
              className={`px-6 py-3 border border-white/20 text-white text-sm tracking-widest uppercase hover:bg-white/5 transition-colors ${
                currentStepIndex === 0 ? "opacity-0 pointer-events-none" : ""
              }`}
            >
              Back
            </button>

            {currentStep === "review" ? (
              <button
                onClick={handleSubmit}
                className="px-8 py-3 bg-white text-black text-sm tracking-widest uppercase hover:bg-white/90 transition-colors flex items-center gap-2"
              >
                Submit Order <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={nextStep}
                className="px-8 py-3 bg-white text-black text-sm tracking-widest uppercase hover:bg-white/90 transition-colors flex items-center gap-2"
              >
                Continue <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
